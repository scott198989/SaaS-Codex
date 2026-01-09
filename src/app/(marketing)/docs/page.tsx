import Link from "next/link";

const docs = [
  {
    title: "Quickstart",
    description: "Create a workspace, upload a batch, and export JSONL.",
    href: "/docs/quickstart",
  },
  {
    title: "Cleaning profiles",
    description: "Tune reconstruction, deduplication, and chunking settings.",
    href: "/docs/profiles",
  },
  {
    title: "Billing + quotas",
    description: "Configure Stripe plans and enforce usage limits.",
    href: "/docs/pricing",
  },
];

export default function DocsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Documentation
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--foreground)]">
          Product docs for Havoc Data Forge
        </h1>
        <p className="text-[color:var(--muted)]">
          Everything needed to deploy, configure, and operate the Forge in production.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {docs.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5 transition hover:translate-y-[-2px]"
          >
            <p className="text-lg font-semibold text-[color:var(--foreground)]">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{item.description}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-[color:var(--border)] bg-white/70 p-6 text-sm text-[color:var(--muted)]">
        <p className="font-semibold text-[color:var(--foreground)]">Proof, not promises</p>
        <p className="mt-2">
          Market size, pricing, and demand assumptions must be validated with real data.
          The documentation includes an experiment plan for verification.
        </p>
      </div>
    </section>
  );
}
