import type { Locale } from "@/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
  redirectTo?: string;
};

export function LanguageToggle({ locale, redirectTo = "/" }: LanguageToggleProps) {
  const nextLocale = locale === "en" ? "es" : "en";
  const label = locale === "en" ? "ES" : "EN";
  return (
    <a
      href={`/api/locale?lang=${nextLocale}&redirect=${encodeURIComponent(redirectTo)}`}
      className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--foreground)]"
      aria-label="Toggle language"
    >
      {label}
    </a>
  );
}
