import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export default async function SupportPage() {
  const locale = await getLocale();
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          {locale === "en" ? "Support" : "Soporte"}
        </p>
        <h1 className="font-display text-3xl font-semibold text-[color:var(--foreground)]">
          {locale === "en"
            ? "We answer every message."
            : "Respondemos cada mensaje."}
        </h1>
        <p className="text-[color:var(--muted)]">
          {locale === "en"
            ? "Send a note and include the list name if you need help."
            : "Escribe y agrega el nombre de la lista si necesitas ayuda."}
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">
            {locale === "en" ? "Email support" : "Soporte por correo"}
          </p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            {locale === "en"
              ? "We reply within one business day."
              : "Respondemos en un dia habil."}
          </p>
          <Link
            href="mailto:support@looplist.app"
            className="mt-4 inline-flex rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]"
          >
            support@looplist.app
          </Link>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-5">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">
            {locale === "en" ? "Help center" : "Centro de ayuda"}
          </p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            {locale === "en"
              ? "Guides and setup tips are on the way."
              : "Guías y consejos estarán disponibles pronto."}
          </p>
          <button className="mt-4 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)]">
            {locale === "en" ? "Browse guides" : "Ver guias"}
          </button>
        </div>
      </div>
    </section>
  );
}
