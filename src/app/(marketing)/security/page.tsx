export default function SecurityPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Security
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--foreground)]">
          Data handling and audit controls
        </h1>
        <p className="text-[color:var(--muted)]">
          Havoc Data Forge logs every transformation and keeps outputs traceable to the
          source. Compliance certifications are only listed after verification.
        </p>
      </div>
      <div className="mt-10 grid gap-4">
        {[
          "Encryption in transit and at rest (depends on your hosting setup).",
          "Per-run audit logs with checksums and before/after samples.",
          "Configurable retention and deletion policies.",
          "Role-based access for workspace members.",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5 text-sm text-[color:var(--muted)]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
