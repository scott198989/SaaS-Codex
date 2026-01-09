import Link from "next/link";
import { AppPage } from "@/components/app-page";

const runs = [
  {
    id: "RUN-2041",
    status: "Cleaning",
    files: 21,
    started: "2 minutes ago",
  },
  {
    id: "RUN-2038",
    status: "Ready",
    files: 140,
    started: "2 hours ago",
  },
  {
    id: "RUN-2035",
    status: "Queued",
    files: 8,
    started: "Yesterday",
  },
];

export default function JobsPage() {
  return (
    <AppPage
      title="Processing runs"
      description="Track every batch, inspect logs, and export validated JSONL."
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[color:var(--muted)]">
          3 active runs, 2 awaiting review
        </p>
        <Link
          href="/jobs/new"
          className="rounded-full bg-[color:var(--foreground)] px-4 py-2 text-sm font-semibold text-[color:var(--background)] shadow-elevated"
        >
          New run
        </Link>
      </div>
      <div className="mt-6 grid gap-4">
        {runs.map((run) => (
          <div
            key={run.id}
            className="flex flex-col gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">{run.id}</p>
              <p className="text-xs text-[color:var(--muted)]">
                {run.files} files · {run.started}
              </p>
            </div>
            <span className="rounded-full bg-[color:var(--panel-strong)] px-3 py-1 text-xs">
              {run.status}
            </span>
          </div>
        ))}
      </div>
    </AppPage>
  );
}
