import { AppPage } from "@/components/app-page";

const reminders = [
  { list: "Morning kitchen reset", time: "Daily, 7:00 AM CDT" },
  { list: "Trash + recycling", time: "Wednesday, 6:00 PM CDT" },
];

export default function RemindersPage() {
  return (
    <AppPage
      title="Reminders"
      description="Manage when LoopList sends notifications."
    >
      <div className="grid gap-4">
        {reminders.map((reminder) => (
          <div
            key={reminder.list}
            className="flex flex-col gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                {reminder.list}
              </p>
              <p className="text-xs text-[color:var(--muted)]">{reminder.time}</p>
            </div>
            <button className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
              Edit
            </button>
          </div>
        ))}
      </div>
    </AppPage>
  );
}
