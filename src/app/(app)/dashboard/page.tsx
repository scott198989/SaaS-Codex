import Link from "next/link";

const recentRuns = [
  {
    id: "RUN-2041",
    status: "Cleaning",
    detail: "Legal bundle (21 files)",
    progress: "62%",
  },
  {
    id: "RUN-2038",
    status: "Ready",
    detail: "Support knowledge base",
    progress: "100%",
  },
  {
    id: "RUN-2035",
    status: "Queued",
    detail: "OCR backlog",
    progress: "0%",
  },
];

export default function DashboardPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Ingestion
            </p>
            <h2 className="text-xl font-semibold">Start a new processing run</h2>
          </div>
          <Link
            href="/jobs/new"
            className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-semibold text-[color:var(--foreground)]"
          >
            Configure
          </Link>
        </div>
        <div className="mt-6 grid gap-4 rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--panel)] p-6 text-sm text-[color:var(--muted)]">
          <p className="font-semibold text-[color:var(--foreground)]">Drag files or folders here</p>
          <p>
            Drop PDFs, DOCX, PPTX, images, HTML, notebooks, ZIP/TAR archives, or
            paste a public URL to ingest remotely.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)]">
              Upload batch
            </button>
            <button className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
              Connect source
            </button>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Cleaning profile", "Legal + policy docs"],
            ["Output", "Text JSONL + Q/A JSONL"],
            ["Partition strategy", "Archive/review 90/10"],
          ].map(([title, detail]) => (
            <div
              key={title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                {title}
              </p>
              <p className="mt-2 text-sm font-semibold text-[color:var(--foreground)]">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Recent runs
            </p>
            <h2 className="text-xl font-semibold">Pipeline activity</h2>
          </div>
          <Link
            href="/jobs"
            className="text-sm font-semibold text-[color:var(--foreground)]"
          >
            View all
          </Link>
        </div>
        <div className="mt-6 space-y-4">
          {recentRuns.map((run) => (
            <div
              key={run.id}
              className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-4"
            >
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-semibold text-[color:var(--foreground)]">{run.id}</p>
                  <p className="text-[color:var(--muted)]">{run.detail}</p>
                </div>
                <span className="rounded-full bg-[color:var(--panel-strong)] px-3 py-1 text-xs">
                  {run.status}
                </span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-[color:var(--panel-strong)]">
                <div
                  className="h-2 rounded-full bg-[color:var(--accent-2)]"
                  style={{ width: run.progress }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
