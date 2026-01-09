import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { hashPassword, hashToken } from "@/lib/auth";
import { readRequestData } from "@/lib/http";

const schema = z.object({
  token: z.string().min(1),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  const data = await readRequestData(request);
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    const url = new URL("/reset", request.url);
    url.searchParams.set("error", "invalid");
    return NextResponse.redirect(url, { status: 303 });
  }

  const { token, password } = parsed.data;
  const tokenHash = hashToken(token);
  const record = await prisma.passwordResetToken.findUnique({
    where: { tokenHash },
  });

  if (!record || record.expiresAt.getTime() < Date.now()) {
    const url = new URL("/reset", request.url);
    url.searchParams.set("error", "expired");
    return NextResponse.redirect(url, { status: 303 });
  }

  const passwordHash = await hashPassword(password);
  await prisma.user.update({
    where: { id: record.userId },
    data: { passwordHash },
  });

  await prisma.passwordResetToken.deleteMany({ where: { userId: record.userId } });

  return NextResponse.redirect(new URL("/login?reset=1", request.url), { status: 303 });
}
