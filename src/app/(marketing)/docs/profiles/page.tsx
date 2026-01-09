export default function ProfilesGuidePage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Cleaning profiles
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--foreground)]">
          Configure parsing and cleaning rules
        </h1>
        <p className="text-[color:var(--muted)]">
          Profiles define how documents are reconstructed, chunked, and deduplicated.
        </p>
      </div>
      <div className="mt-10 space-y-4 text-sm text-[color:var(--muted)]">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="font-semibold text-[color:var(--foreground)]">Structure</p>
          <p className="mt-2">
            Control paragraph reconstruction, list handling, and table extraction.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="font-semibold text-[color:var(--foreground)]">Noise filters</p>
          <p className="mt-2">Define boilerplate rules, footer/header stripping, and OCR cleanup.</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          <p className="font-semibold text-[color:var(--foreground)]">Chunking</p>
          <p className="mt-2">
            Set max lengths and enforce Q/A integrity during segmentation.
          </p>
        </div>
      </div>
    </section>
  );
}
