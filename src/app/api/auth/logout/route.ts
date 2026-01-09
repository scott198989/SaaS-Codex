import { NextResponse } from "next/server";
import { clearSession } from "@/lib/auth";

export async function POST(request: Request) {
  const clearedCookie = await clearSession();
  const response = NextResponse.redirect(new URL("/login", request.url), {
    status: 303,
  });
  response.cookies.set(
    clearedCookie.name,
    clearedCookie.value,
    clearedCookie.options
  );
  return response;
}
