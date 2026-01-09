import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { createSession, createVerificationToken, verifyPassword } from "@/lib/auth";
import { buildVerificationEmail, sendEmail } from "@/lib/email";
import { readRequestData } from "@/lib/http";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

function wantsHtml(request: Request) {
  return (request.headers.get("accept") || "").includes("text/html");
}

export async function POST(request: Request) {
  const data = await readRequestData(request);
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    if (wantsHtml(request)) {
      const url = new URL("/login", request.url);
      url.searchParams.set("error", "invalid");
      return NextResponse.redirect(url, { status: 303 });
    }
    return NextResponse.json({ error: "Invalid credentials." }, { status: 400 });
  }

  const { email, password } = parsed.data;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    if (wantsHtml(request)) {
      const url = new URL("/login", request.url);
      url.searchParams.set("error", "invalid");
      return NextResponse.redirect(url, { status: 303 });
    }
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) {
    if (wantsHtml(request)) {
      const url = new URL("/login", request.url);
      url.searchParams.set("error", "invalid");
      return NextResponse.redirect(url, { status: 303 });
    }
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  if (!user.emailVerifiedAt) {
    const token = await createVerificationToken(user.id);
    const emailPayload = buildVerificationEmail(token);
    await sendEmail({
      to: user.email,
      subject: emailPayload.subject,
      html: emailPayload.html,
    });
    if (wantsHtml(request)) {
      const url = new URL("/verify", request.url);
      url.searchParams.set("email", user.email);
      url.searchParams.set("error", "verify");
      return NextResponse.redirect(url, { status: 303 });
    }
    return NextResponse.json(
      { error: "Email not verified. Verification email resent." },
      { status: 403 }
    );
  }

  await createSession(user.id);

  if (wantsHtml(request)) {
    return NextResponse.redirect(new URL("/dashboard", request.url), { status: 303 });
  }
  return NextResponse.json({ ok: true });
}
