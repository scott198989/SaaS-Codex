import { AppPage } from "@/components/app-page";

export default function SettingsPage() {
  return (
    <AppPage
      title="Workspace settings"
      description="Control members, API keys, and export defaults."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">
            Workspace details
          </p>
          <p className="mt-1 text-xs text-[color:var(--muted)]">
            Primary workspace · US-East region
          </p>
          <button className="mt-4 rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
            Edit details
          </button>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-4">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">
            API keys
          </p>
          <p className="mt-1 text-xs text-[color:var(--muted)]">
            Rotate keys and set ingestion limits.
          </p>
          <button className="mt-4 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)]">
            Generate key
          </button>
        </div>
      </div>
    </AppPage>
  );
}
