import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { createVerificationToken, hashPassword } from "@/lib/auth";
import { buildVerificationEmail, sendEmail } from "@/lib/email";
import { readRequestData } from "@/lib/http";
import { slugify, uniqueSlug } from "@/lib/slug";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  const data = await readRequestData(request);
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    const url = new URL("/signup", request.url);
    url.searchParams.set("error", "invalid");
    return NextResponse.redirect(url, { status: 303 });
  }

  const { name, email, password } = parsed.data;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    const url = new URL("/signup", request.url);
    url.searchParams.set("error", "exists");
    return NextResponse.redirect(url, { status: 303 });
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
    },
  });

  const workspaceName = `${name.split(" ")[0]}'s Workspace`;
  const baseSlug = slugify(workspaceName) || slugify(email.split("@")[0] ?? "workspace");
  let slug = baseSlug;
  const slugExists = await prisma.workspace.findUnique({ where: { slug } });
  if (slugExists) {
    slug = uniqueSlug(baseSlug);
  }

  const workspace = await prisma.workspace.create({
    data: {
      name: workspaceName,
      slug,
      ownerId: user.id,
    },
  });

  await prisma.membership.create({
    data: {
      userId: user.id,
      workspaceId: workspace.id,
      role: "owner",
    },
  });

  const token = await createVerificationToken(user.id);
  const emailPayload = buildVerificationEmail(token);
  await sendEmail({
    to: email,
    subject: emailPayload.subject,
    html: emailPayload.html,
  });

  const redirectUrl = new URL("/verify", request.url);
  redirectUrl.searchParams.set("email", email);
  return NextResponse.redirect(redirectUrl, { status: 303 });
}
