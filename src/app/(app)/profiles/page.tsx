import { AppPage } from "@/components/app-page";

const profiles = [
  {
    name: "Legal + policy",
    focus: "Contracts, regulations, compliance docs",
  },
  {
    name: "Support knowledge base",
    focus: "FAQs, chat logs, troubleshooting guides",
  },
  {
    name: "Engineering + code",
    focus: "Markdown, API docs, repo text",
  },
];

export default function ProfilesPage() {
  return (
    <AppPage
      title="Cleaning profiles"
      description="Tune extraction, noise filtering, and chunking strategies by domain."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4"
          >
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              {profile.name}
            </p>
            <p className="mt-1 text-xs text-[color:var(--muted)]">{profile.focus}</p>
            <button className="mt-4 rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]">
              Edit profile
            </button>
          </div>
        ))}
      </div>
    </AppPage>
  );
}
