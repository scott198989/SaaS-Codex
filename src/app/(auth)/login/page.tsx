import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export default async function LoginPage() {
  const locale = await getLocale();
  return (
    <div className="w-full rounded-3xl border border-[color:var(--border)] bg-white/70 p-8 shadow-elevated">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          {locale === "en" ? "Welcome back" : "Bienvenido de nuevo"}
        </p>
        <h1 className="font-display text-2xl font-semibold">
          {locale === "en" ? "Sign in to LoopList" : "Entra a LoopList"}
        </h1>
        <p className="text-sm text-[color:var(--muted)]">
          {locale === "en"
            ? "Pick up right where your lists left off."
            : "Continua justo donde quedaron tus listas."}
        </p>
      </div>
      <form className="mt-6 space-y-4 text-sm" method="post" action="/api/auth/login">
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
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            {locale === "en" ? "Password" : "Contrasena"}
          </span>
          <input
            type="password"
            name="password"
            className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none"
            placeholder="••••••••"
          />
        </label>
        <button className="w-full rounded-full bg-[color:var(--foreground)] px-4 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated">
          {locale === "en" ? "Sign in" : "Entrar"}
        </button>
      </form>
      <div className="mt-6 flex items-center justify-between text-xs text-[color:var(--muted)]">
        <Link href="/reset" className="font-semibold text-[color:var(--foreground)]">
          {locale === "en" ? "Forgot password?" : "Olvidaste la contrasena?"}
        </Link>
        <Link href="/signup" className="font-semibold text-[color:var(--foreground)]">
          {locale === "en" ? "Create account" : "Crear cuenta"}
        </Link>
      </div>
    </div>
  );
}
