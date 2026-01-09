import Link from "next/link";

export default function SupportPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Support
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--foreground)]">
          We track every error, and we answer every alert.
        </h1>
        <p className="text-[color:var(--muted)]">
          Use the support channel that fits your team. Response times depend on your plan.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">Email support</p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            File a ticket with logs attached and receive actionable guidance.
          </p>
          <Link
            href="mailto:support@havocdataforge.com"
            className="mt-4 inline-flex rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]"
          >
            Email support
          </Link>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-5">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">Status updates</p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Subscribe for processing or incident alerts tailored to your workspace.
          </p>
          <button className="mt-4 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
