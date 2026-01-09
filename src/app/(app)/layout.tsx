import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/lists", label: "Lists" },
  { href: "/rotations", label: "Rotations" },
  { href: "/reminders", label: "Reminders" },
  { href: "/billing", label: "Billing" },
  { href: "/settings", label: "Settings" },
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[220px_1fr]">
        <aside className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--foreground)] text-sm font-semibold text-[color:var(--background)]">
              LL
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                LoopList
              </p>
              <p className="text-sm font-semibold">Home</p>
            </div>
          </div>
          <nav className="mt-6 space-y-1 text-sm text-[color:var(--muted)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 transition hover:bg-white/70 hover:text-[color:var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="space-y-6">
          <header className="flex flex-col gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                LoopList Workspace
              </p>
              <h1 className="text-2xl font-semibold">Shared routines</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link
                href="/lists/new"
                className="rounded-full bg-[color:var(--foreground)] px-4 py-2 font-semibold text-[color:var(--background)] shadow-elevated"
              >
                New list
              </Link>
              <Link
                href="/settings"
                className="rounded-full border border-[color:var(--border)] px-4 py-2 font-semibold text-[color:var(--foreground)]"
              >
                Settings
              </Link>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
