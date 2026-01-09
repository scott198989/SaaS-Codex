import { AppPage } from "@/components/app-page";

export default function BillingPage() {
  return (
    <AppPage
      title="Billing"
      description="Manage plan details, invoices, and usage-based quotas."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Current plan
          </p>
          <p className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">Growth</p>
          <p className="mt-1 text-xs text-[color:var(--muted)]">
            100k pages / month, OCR included, priority queue.
          </p>
          <button className="mt-4 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)]">
            Manage subscription
          </button>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Usage
          </p>
          <p className="mt-3 text-sm text-[color:var(--muted)]">Pages processed</p>
          <div className="mt-3 h-2 w-full rounded-full bg-[color:var(--panel-strong)]">
            <div className="h-2 w-3/5 rounded-full bg-[color:var(--accent-3)]" />
          </div>
          <p className="mt-2 text-xs text-[color:var(--muted)]">60k / 100k pages</p>
        </div>
      </div>
    </AppPage>
  );
}
