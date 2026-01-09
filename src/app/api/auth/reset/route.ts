import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { createPasswordResetToken } from "@/lib/auth";
import { buildPasswordResetEmail, sendEmail } from "@/lib/email";
import { readRequestData } from "@/lib/http";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  const data = await readRequestData(request);
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    const url = new URL("/reset", request.url);
    url.searchParams.set("error", "invalid");
    return NextResponse.redirect(url, { status: 303 });
  }

  const { email } = parsed.data;
  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    const token = await createPasswordResetToken(user.id);
    const emailPayload = buildPasswordResetEmail(token);
    await sendEmail({
      to: user.email,
      subject: emailPayload.subject,
      html: emailPayload.html,
    });
  }

  const url = new URL("/reset", request.url);
  url.searchParams.set("sent", "1");
  return NextResponse.redirect(url, { status: 303 });
}
