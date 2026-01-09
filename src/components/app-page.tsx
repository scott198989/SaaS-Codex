import React from "react";

type AppPageProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function AppPage({ title, description, children }: AppPageProps) {
  return (
    <section className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Workspace
        </p>
        <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">{title}</h2>
        {description ? (
          <p className="text-sm text-[color:var(--muted)]">{description}</p>
        ) : null}
      </div>
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
