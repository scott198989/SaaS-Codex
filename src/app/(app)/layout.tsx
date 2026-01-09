import Link from "next/link";
import { requireUser } from "@/lib/auth";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/jobs", label: "Runs" },
  { href: "/exports", label: "Exports" },
  { href: "/profiles", label: "Cleaning profiles" },
  { href: "/billing", label: "Billing" },
  { href: "/settings", label: "Settings" },
];

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await requireUser();
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[220px_1fr]">
        <aside className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--foreground)] text-sm font-semibold text-[color:var(--background)]">
              HDF
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                Workspace
              </p>
              <p className="text-sm font-semibold">Primary</p>
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
          <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-white/70 p-4 text-xs text-[color:var(--muted)]">
            <p className="font-semibold text-[color:var(--foreground)]">Usage</p>
            <p className="mt-2">4.2k / 10k pages</p>
            <div className="mt-3 h-2 w-full rounded-full bg-[color:var(--panel-strong)]">
              <div className="h-2 w-2/5 rounded-full bg-[color:var(--accent)]" />
            </div>
          </div>
        </aside>
        <div className="space-y-6">
          <header className="flex flex-col gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                Havoc Data Forge
              </p>
              <h1 className="text-2xl font-semibold">Operational dashboard</h1>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                Signed in as {user.name ?? user.email}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link
                href="/jobs/new"
                className="rounded-full bg-[color:var(--foreground)] px-4 py-2 font-semibold text-[color:var(--background)] shadow-elevated"
              >
                New run
              </Link>
              <Link
                href="/docs"
                className="rounded-full border border-[color:var(--border)] px-4 py-2 font-semibold text-[color:var(--foreground)]"
              >
                Docs
              </Link>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
