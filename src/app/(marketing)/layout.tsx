import Link from "next/link";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen text-[color:var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--foreground)] text-sm font-semibold text-[color:var(--background)]">
              HDF
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                Havoc
              </p>
              <p className="text-lg font-semibold tracking-tight">Data Forge</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
            <a href="#platform" className="transition hover:text-[color:var(--foreground)]">
              Platform
            </a>
            <a href="#pipeline" className="transition hover:text-[color:var(--foreground)]">
              Pipeline
            </a>
            <a href="#outputs" className="transition hover:text-[color:var(--foreground)]">
              Outputs
            </a>
            <a href="#pricing" className="transition hover:text-[color:var(--foreground)]">
              Pricing
            </a>
            <Link href="/docs" className="transition hover:text-[color:var(--foreground)]">
              Docs
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm text-[color:var(--foreground)] transition hover:border-[color:var(--foreground)]"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-[color:var(--foreground)] px-4 py-2 text-sm text-[color:var(--background)] shadow-elevated transition hover:translate-y-[-1px]"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]/90">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Havoc Data Forge
            </p>
            <p className="mt-3 max-w-sm text-sm text-[color:var(--muted)]">
              Industrial-grade document ingestion and cleaning for audited structured exports.
            </p>
          </div>
          <div className="text-sm text-[color:var(--muted)]">
            <p className="font-semibold text-[color:var(--foreground)]">Platform</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#platform" className="transition hover:text-[color:var(--foreground)]">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#pipeline" className="transition hover:text-[color:var(--foreground)]">
                  Processing steps
                </a>
              </li>
              <li>
                <a href="#outputs" className="transition hover:text-[color:var(--foreground)]">
                  JSONL outputs
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-[color:var(--muted)]">
            <p className="font-semibold text-[color:var(--foreground)]">Company</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/docs" className="transition hover:text-[color:var(--foreground)]">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/security" className="transition hover:text-[color:var(--foreground)]">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/support" className="transition hover:text-[color:var(--foreground)]">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
