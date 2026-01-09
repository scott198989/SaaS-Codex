import { NextResponse } from "next/server";
import { localeCookie } from "@/lib/i18n";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang");
  const redirectTo = url.searchParams.get("redirect") || "/";
  const response = NextResponse.redirect(new URL(redirectTo, request.url), {
    status: 303,
  });

  if (lang === "en" || lang === "es") {
    response.cookies.set(localeCookie, lang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}
