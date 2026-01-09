import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { getLocale, getTranslations } from "@/lib/i18n";

export default async function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen text-[color:var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--foreground)] text-sm font-semibold text-[color:var(--background)]">
              LL
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                {t.brand}
              </p>
              <p className="text-lg font-semibold tracking-tight">
                {t.hero.kicker}
              </p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
            <a href="#features" className="transition hover:text-[color:var(--foreground)]">
              {t.nav.features}
            </a>
            <a href="#how" className="transition hover:text-[color:var(--foreground)]">
              {t.nav.how}
            </a>
            <a href="#pricing" className="transition hover:text-[color:var(--foreground)]">
              {t.nav.pricing}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle locale={locale} />
            <Link
              href="/login"
              className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm text-[color:var(--foreground)] transition hover:border-[color:var(--foreground)]"
            >
              {t.nav.login}
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-[color:var(--foreground)] px-4 py-2 text-sm text-[color:var(--background)] shadow-elevated transition hover:translate-y-[-1px]"
            >
              {t.nav.signup}
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]/90">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              {t.brand}
            </p>
            <p className="mt-3 max-w-sm text-sm text-[color:var(--muted)]">
              {t.footer.tagline}
            </p>
          </div>
          <div className="text-sm text-[color:var(--muted)]">
            <p className="font-semibold text-[color:var(--foreground)]">
              {t.nav.features}
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#features" className="transition hover:text-[color:var(--foreground)]">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#how" className="transition hover:text-[color:var(--foreground)]">
                  {t.nav.how}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="transition hover:text-[color:var(--foreground)]"
                >
                  {t.nav.pricing}
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-[color:var(--muted)]">
            <p className="font-semibold text-[color:var(--foreground)]">LoopList</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className="transition hover:text-[color:var(--foreground)]">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/support" className="transition hover:text-[color:var(--foreground)]">
                  {t.footer.support}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
