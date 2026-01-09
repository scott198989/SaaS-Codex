import { AppPage } from "@/components/app-page";

export default function SettingsPage() {
  return (
    <AppPage
      title="Settings"
      description="Control members, timezone, and notification preferences."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">
            Workspace timezone
          </p>
          <p className="mt-1 text-xs text-[color:var(--muted)]">America/Chicago (CDT)</p>
          <button className="mt-4 rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
            Update timezone
          </button>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-4">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">
            Members
          </p>
          <p className="mt-1 text-xs text-[color:var(--muted)]">
            Invite people and assign roles.
          </p>
          <button className="mt-4 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)]">
            Invite member
          </button>
        </div>
      </div>
    </AppPage>
  );
}
