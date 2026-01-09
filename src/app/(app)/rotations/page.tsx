import { AppPage } from "@/components/app-page";

const rotations = [
  { name: "Morning kitchen reset", cadence: "Daily", next: "Jordan" },
  { name: "Trash + recycling", cadence: "Weekly", next: "Ari" },
];

export default function RotationsPage() {
  return (
    <AppPage
      title="Rotations"
      description="Control who is next and keep rotations fair."
    >
      <div className="grid gap-4">
        {rotations.map((rotation) => (
          <div
            key={rotation.name}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4"
          >
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              {rotation.name}
            </p>
            <p className="mt-1 text-xs text-[color:var(--muted)]">
              {rotation.cadence} · Next: {rotation.next}
            </p>
          </div>
        ))}
      </div>
    </AppPage>
  );
}
