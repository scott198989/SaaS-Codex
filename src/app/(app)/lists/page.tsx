import { AppPage } from "@/components/app-page";

const lists = [
  { name: "Morning kitchen reset", members: 4, cadence: "Daily" },
  { name: "Trash + recycling", members: 3, cadence: "Weekly" },
];

export default function ListsPage() {
  return (
    <AppPage
      title="Lists"
      description="Create shared checklists and assign rotation rules."
    >
      <div className="grid gap-4">
        {lists.map((list) => (
          <div
            key={list.name}
            className="flex flex-col gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                {list.name}
              </p>
              <p className="text-xs text-[color:var(--muted)]">
                {list.members} members · {list.cadence}
              </p>
            </div>
            <button className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
              Open
            </button>
          </div>
        ))}
      </div>
    </AppPage>
  );
}
