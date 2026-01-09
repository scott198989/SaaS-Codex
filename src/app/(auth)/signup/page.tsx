import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export default async function SignupPage() {
  const locale = await getLocale();
  return (
    <div className="w-full rounded-3xl border border-[color:var(--border)] bg-white/70 p-8 shadow-elevated">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          {locale === "en" ? "Get started" : "Empieza ahora"}
        </p>
        <h1 className="font-display text-2xl font-semibold">
          {locale === "en" ? "Create your LoopList" : "Crea tu LoopList"}
        </h1>
        <p className="text-sm text-[color:var(--muted)]">
          {locale === "en"
            ? "Stay organized with shared routines."
            : "Organizate con rutinas compartidas."}
        </p>
      </div>
      <form className="mt-6 space-y-4 text-sm" method="post" action="/api/auth/signup">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            {locale === "en" ? "Name" : "Nombre"}
          </span>
          <input
            type="text"
            name="name"
            className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none"
            placeholder="Alex Morgan"
          />
        </label>
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
            placeholder={locale === "en" ? "Create a password" : "Crea una contrasena"}
          />
        </label>
        <button className="w-full rounded-full bg-[color:var(--foreground)] px-4 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated">
          {locale === "en" ? "Create account" : "Crear cuenta"}
        </button>
      </form>
      <p className="mt-6 text-xs text-[color:var(--muted)]">
        {locale === "en"
          ? "By creating an account, you agree to receive email reminders."
          : "Al crear una cuenta aceptas recibir recordatorios por correo."}
      </p>
      <div className="mt-4 text-xs text-[color:var(--muted)]">
        {locale === "en" ? "Already have access?" : "Ya tienes cuenta?"}{" "}
        <Link href="/login" className="font-semibold text-[color:var(--foreground)]">
          {locale === "en" ? "Sign in" : "Entrar"}
        </Link>
      </div>
    </div>
  );
}
