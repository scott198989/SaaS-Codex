export default function QuickstartPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Quickstart
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--foreground)]">
          Launch your first run
        </h1>
        <p className="text-[color:var(--muted)]">
          Create a workspace, upload a batch, and download validated JSONL exports.
        </p>
      </div>
      <div className="mt-10 space-y-4 text-sm text-[color:var(--muted)]">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="font-semibold text-[color:var(--foreground)]">
            1. Create a workspace
          </p>
          <p className="mt-2">Sign up, verify your email, and create a workspace.</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="font-semibold text-[color:var(--foreground)]">
            2. Upload a batch
          </p>
          <p className="mt-2">Drop files or archives into the upload queue.</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="font-semibold text-[color:var(--foreground)]">
            3. Export JSONL
          </p>
          <p className="mt-2">Download text or Q/A JSONL with validation reports.</p>
        </div>
      </div>
    </section>
  );
}
