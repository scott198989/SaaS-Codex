export default function PricingGuidePage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Pricing guide
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--foreground)]">
          Configure Stripe plans and quotas
        </h1>
        <p className="text-[color:var(--muted)]">
          Set plan pricing in Stripe and map each plan to usage limits inside Havoc Data
          Forge. Avoid hard-coding prices in the app until you validate demand.
        </p>
      </div>
      <div className="mt-10 space-y-4 text-sm text-[color:var(--muted)]">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="font-semibold text-[color:var(--foreground)]">Step 1: Create plans</p>
          <p className="mt-2">
            Create products and prices in Stripe. Store the price IDs in environment
            variables so billing stays flexible.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="font-semibold text-[color:var(--foreground)]">
            Step 2: Define quotas
          </p>
          <p className="mt-2">
            Update the quota table to align with each plan. Quotas are enforced during
            ingestion and export.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="font-semibold text-[color:var(--foreground)]">
            Step 3: Validate pricing
          </p>
          <p className="mt-2">
            Run willingness-to-pay and conversion experiments before committing to public
            pricing claims.
          </p>
        </div>
      </div>
    </section>
  );
}
