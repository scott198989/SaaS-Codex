import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hashToken } from "@/lib/auth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login?error=invalid", request.url), {
      status: 303,
    });
  }

  const tokenHash = hashToken(token);
  const record = await prisma.verificationToken.findUnique({
    where: { tokenHash },
    include: { user: true },
  });

  if (!record || record.expiresAt.getTime() < Date.now()) {
    return NextResponse.redirect(new URL("/verify?error=expired", request.url), {
      status: 303,
    });
  }

  await prisma.user.update({
    where: { id: record.userId },
    data: { emailVerifiedAt: new Date() },
  });
  await prisma.verificationToken.deleteMany({ where: { userId: record.userId } });

  return NextResponse.redirect(new URL("/login?verified=1", request.url), {
    status: 303,
  });
}
