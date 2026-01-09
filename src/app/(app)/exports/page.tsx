import { AppPage } from "@/components/app-page";

const exportsList = [
  {
    name: "Policy export v3",
    type: "Text JSONL",
    updated: "Today",
  },
  {
    name: "Support Q/A export",
    type: "Q/A JSONL",
    updated: "Yesterday",
  },
];

export default function ExportsPage() {
  return (
    <AppPage
      title="Exports"
      description="Manage structured JSONL exports, validation reports, and checksums."
    >
      <div className="grid gap-4">
        {exportsList.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">{item.name}</p>
              <p className="text-xs text-[color:var(--muted)]">
                {item.type} · Updated {item.updated}
              </p>
            </div>
            <button className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
              Download
            </button>
          </div>
        ))}
      </div>
    </AppPage>
  );
}
