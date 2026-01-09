import { AppPage } from "@/components/app-page";

export default function NewListPage() {
  return (
    <AppPage
      title="New list"
      description="Start a routine with a clear rotation and reminders."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 text-sm text-[color:var(--muted)]">
          <p className="text-base font-semibold text-[color:var(--foreground)]">
            Templates
          </p>
          <p className="mt-2">
            Choose a template or build your own list from scratch.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)]">
              Home chores
            </button>
            <button className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
              Roommate reset
            </button>
            <button className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
              Opening checklist
            </button>
          </div>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-6 text-sm text-[color:var(--muted)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Rotation settings
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                Rotation type
              </p>
              <p className="mt-1 text-xs">Round robin, weekly</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                Reminder time
              </p>
              <p className="mt-1 text-xs">CDT, 7:00 AM</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                Members
              </p>
              <p className="mt-1 text-xs">Invite after creation</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-semibold text-[color:var(--background)] shadow-elevated">
            Create list
          </button>
        </div>
      </div>
    </AppPage>
  );
}
