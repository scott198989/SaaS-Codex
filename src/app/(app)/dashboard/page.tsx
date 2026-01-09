const sampleLists = [
  {
    name: "Morning kitchen reset",
    nextUp: "Jordan",
    due: "Today, 7:00 AM",
  },
  {
    name: "Trash + recycling",
    nextUp: "Ari",
    due: "Wednesday",
  },
  {
    name: "Closing checklist",
    nextUp: "Team A",
    due: "Tonight, 9:00 PM",
  },
];

export default function DashboardPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Overview
            </p>
            <h2 className="text-xl font-semibold">Upcoming rotations</h2>
          </div>
          <button className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
            Adjust schedule
          </button>
        </div>
        <div className="mt-6 space-y-4">
          {sampleLists.map((list) => (
            <div
              key={list.name}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4"
            >
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                {list.name}
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted)]">
                Next up: {list.nextUp} · {list.due}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Reminder health
        </p>
        <h2 className="mt-2 text-xl font-semibold">This week</h2>
        <div className="mt-6 space-y-4 text-sm text-[color:var(--muted)]">
          <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-4">
            <p className="font-semibold text-[color:var(--foreground)]">12 reminders sent</p>
            <p className="mt-2">No missed rotations in the last 7 days.</p>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-4">
            <p className="font-semibold text-[color:var(--foreground)]">Next automation</p>
            <p className="mt-2">Weekly grocery list shares on Sunday, 6:00 PM.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
