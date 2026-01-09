import { AppPage } from "@/components/app-page";

export default function BillingPage() {
  return (
    <AppPage
      title="Billing"
      description="Manage your plan and payment method."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Current plan
          </p>
          <p className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">Free</p>
          <p className="mt-1 text-xs text-[color:var(--muted)]">
            1 list · 3 members
          </p>
          <button className="mt-4 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)]">
            Upgrade to Plus
          </button>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Payment
          </p>
          <p className="mt-3 text-sm text-[color:var(--muted)]">No card on file.</p>
          <button className="mt-4 rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
            Add payment method
          </button>
        </div>
      </div>
    </AppPage>
  );
}
