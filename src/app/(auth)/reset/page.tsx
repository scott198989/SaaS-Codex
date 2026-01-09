import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export default async function ResetPage() {
  const locale = await getLocale();
  return (
    <div className="w-full rounded-3xl border border-[color:var(--border)] bg-white/70 p-8 shadow-elevated">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          {locale === "en" ? "Password reset" : "Restablecer contrasena"}
        </p>
        <h1 className="font-display text-2xl font-semibold">
          {locale === "en" ? "Request a reset link" : "Solicita un enlace"}
        </h1>
        <p className="text-sm text-[color:var(--muted)]">
          {locale === "en"
            ? "We will email a secure link to reset your password."
            : "Te enviaremos un enlace seguro para restablecer tu contrasena."}
        </p>
      </div>
      <form className="mt-6 space-y-4 text-sm" method="post" action="/api/auth/reset">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            {locale === "en" ? "Email" : "Correo"}
          </span>
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none"
            placeholder="you@example.com"
          />
        </label>
        <button className="w-full rounded-full bg-[color:var(--foreground)] px-4 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated">
          {locale === "en" ? "Send reset link" : "Enviar enlace"}
        </button>
      </form>
      <div className="mt-6 text-xs text-[color:var(--muted)]">
        {locale === "en" ? "Remembered your password?" : "Recordaste tu contrasena?"}{" "}
        <Link href="/login" className="font-semibold text-[color:var(--foreground)]">
          {locale === "en" ? "Back to sign in" : "Volver a entrar"}
        </Link>
      </div>
    </div>
  );
}
