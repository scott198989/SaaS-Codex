import { AppPage } from "@/components/app-page";

export default function NewJobPage() {
  return (
    <AppPage
      title="New processing run"
      description="Upload a batch, pick a cleaning profile, and generate validated JSONL."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--panel)] p-6 text-sm text-[color:var(--muted)]">
          <p className="text-base font-semibold text-[color:var(--foreground)]">Drop files</p>
          <p className="mt-2">
            Drag and drop files or folders to start ingestion. Archives are unpacked and
            scanned automatically.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)]">
              Upload batch
            </button>
            <button className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
              Add from URL
            </button>
          </div>
          <p className="mt-6 text-xs text-[color:var(--muted)]">
            Supported: PDF, DOCX, PPTX, XLSX, PNG/JPG, HTML, IPYNB, ZIP/TAR, TXT, MD.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-6 text-sm text-[color:var(--muted)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Run settings
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                Cleaning profile
              </p>
              <p className="mt-1 text-xs">Legal + policy documents</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">Output</p>
              <p className="mt-1 text-xs">Text JSONL + Q/A JSONL</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                Partition strategy
              </p>
              <p className="mt-1 text-xs">Archive/review 90/10</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)] shadow-elevated">
            Start run
          </button>
        </div>
      </div>
    </AppPage>
  );
}
