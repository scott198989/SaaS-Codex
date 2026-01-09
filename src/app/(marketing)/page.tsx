import Link from "next/link";

export default function MarketingHome() {
  return (
    <div>
      <section className="bg-grid border-b border-[color:var(--border)]">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Enterprise-grade data cleaning
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[color:var(--foreground)] md:text-5xl">
              Forge messy documents into clean, audit-ready JSONL for analytics, search, and
              compliance.
            </h1>
            <p className="max-w-xl text-lg text-[color:var(--muted)]">
              Havoc Data Forge turns PDFs, scans, Office files, code, HTML, notebooks, and
              archives into standardized, deduplicated, and validated structured data without
              losing semantic structure.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated transition hover:translate-y-[-1px]"
              >
                Start a workspace
              </Link>
              <Link
                href="/docs"
                className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--foreground)]"
              >
                Read the docs
              </Link>
            </div>
            <div className="grid gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5 text-sm text-[color:var(--muted)]">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[color:var(--foreground)]">No silent failures</span>
                <span className="rounded-full bg-[color:var(--panel-strong)] px-3 py-1 text-xs">
                  Audit first
                </span>
              </div>
              <p>
                Every transformation is logged with before/after samples, checksums, and
                validation signals so teams can prove data integrity end to end.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-elevated">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                Processing console
              </p>
              <span className="rounded-full bg-[color:var(--foreground)] px-3 py-1 text-xs text-[color:var(--background)]">
                Live run
              </span>
            </div>
            <div className="mt-6 space-y-4 text-sm text-[color:var(--muted)]">
              <div className="rounded-2xl border border-[color:var(--border)] bg-white/60 p-4">
                <p className="font-semibold text-[color:var(--foreground)]">Inputs detected</p>
                <p className="mt-2">PDF, DOCX, PNG, HTML, ZIP (12 files)</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--border)] bg-white/60 p-4">
                <p className="font-semibold text-[color:var(--foreground)]">Pipeline</p>
                <ul className="mt-2 space-y-1">
                  <li>1. OCR + native text fusion</li>
                  <li>2. Paragraph reconstruction</li>
                  <li>3. Dedup + noise stripping</li>
                  <li>4. Q/A integrity checks</li>
                  <li>5. JSONL export + partition</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--foreground)] p-4 text-xs text-[color:var(--background)]">
                <p className="font-semibold uppercase tracking-[0.18em]">Sample output</p>
                <pre className="mt-3 overflow-x-auto text-[11px] leading-relaxed">
{`{"text":"Section 3.2: Data retention policy\\n..."}
{"text":"Q: What is the SLA?\\nA: ...","metadata":{"type":"qna"}}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Platform
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              Built for chaotic data, tuned for reliable operations.
            </h2>
            <p className="mt-4 text-[color:var(--muted)]">
              The Forge keeps your document structure intact while enforcing strict output
              guarantees. Every step is deterministic, reversible, and logged.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Multi-format ingestion",
                copy: "PDF, Office, images, HTML, code, notebooks, and archives with unified parsing.",
              },
              {
                title: "Noise-aware cleaning",
                copy: "Headers, footers, boilerplate, and duplicate blocks are stripped safely.",
              },
              {
                title: "Semantic chunking",
                copy: "Chunk boundaries respect paragraphs, tables, and Q/A pairs.",
              },
              {
                title: "Audit-proof outputs",
                copy: "Every JSONL row includes traceable source metadata and checksums.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5"
              >
                <p className="text-lg font-semibold text-[color:var(--foreground)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pipeline"
        className="border-y border-[color:var(--border)] bg-[color:var(--panel)]/70"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Pipeline
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              Content-aware stages with explicit guarantees.
            </h2>
            <p className="mt-4 text-[color:var(--muted)]">
              Every stage enforces output contracts. If a check fails, the run stops and the
              error is visible immediately.
            </p>
            <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-white/70 p-5 text-sm text-[color:var(--muted)]">
              <p className="font-semibold text-[color:var(--foreground)]">Guarantees</p>
              <ul className="mt-3 space-y-2">
                <li>No fabricated content or synthetic additions.</li>
                <li>All JSONL lines validate before export.</li>
                <li>Q/A pairs stay intact during cleaning and partitioning.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            {[
              ["Ingest + classify", "Detect file type, encoding, and extraction strategy."],
              ["Parse + OCR merge", "Fuse native text with OCR for scanned pages."],
              ["Reconstruct structure", "Recover paragraphs, tables, lists, and code blocks."],
              ["Clean + deduplicate", "Remove boilerplate, normalize spacing, hash blocks."],
              ["Chunk + validate", "Respect semantic boundaries, validate JSONL."],
              ["Export + partition", "Workspace exports without breaking logical units."],
            ].map(([title, copy], index) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-[color:var(--border)] bg-white/70 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--foreground)] text-sm font-semibold text-[color:var(--background)]">
                  {index + 1}
                </div>
                <div>
                  <p className="text-base font-semibold text-[color:var(--foreground)]">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outputs" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr]">
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--foreground)] p-8 text-[color:var(--background)] shadow-elevated">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--background)]/70">
              Text JSONL
            </p>
            <p className="mt-4 text-2xl font-semibold">Clean, contiguous text blocks.</p>
            <p className="mt-3 text-sm text-[color:var(--background)]/80">
              Ideal for search indexing, analytics pipelines, and compliance archives with
              strict line-level validation and checksum tracking for every block.
            </p>
            <pre className="mt-6 rounded-2xl bg-[color:var(--background)]/10 p-4 text-xs leading-relaxed">
{`{"text":"...","metadata":{"source":"contract.pdf","chunk":12}}`}
            </pre>
          </div>
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-8 shadow-elevated">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Q/A JSONL
            </p>
            <p className="mt-4 text-2xl font-semibold text-[color:var(--foreground)]">
              Structured Q/A pairs with integrity checks.
            </p>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Use joined or structured modes with mandatory pairing validation to prevent
              cross-contamination.
            </p>
            <pre className="mt-6 rounded-2xl border border-[color:var(--border)] bg-white/70 p-4 text-xs leading-relaxed text-[color:var(--muted)]">
{`{"question":"...","answer":"...","metadata":{"source":"faq.docx"}}`}
            </pre>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-[color:var(--border)] bg-[color:var(--panel)]/70">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              Usage-based plans with strict quotas.
            </h2>
            <p className="mt-4 text-[color:var(--muted)]">
              Plans are configured in Stripe and enforced automatically. Use the launch plan
              templates or set your own thresholds in minutes.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated transition hover:translate-y-[-1px]"
              >
                Create account
              </Link>
              <Link
                href="/docs/pricing"
                className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--foreground)]"
              >
                View plan guide
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Starter", "Low-volume ingestion with 10k pages / month."],
              ["Growth", "Higher throughput with advanced cleaning profiles."],
              ["Scale", "Dedicated worker capacity and custom quotas."],
              ["Enterprise", "Private parsing stack and compliance extensions."],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-5"
              >
                <p className="text-lg font-semibold text-[color:var(--foreground)]">{title}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--foreground)] p-10 text-[color:var(--background)] shadow-elevated">
          <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--background)]/70">
                Ready to forge?
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Launch a workspace and see clean JSONL in minutes.
              </h2>
              <p className="mt-3 text-sm text-[color:var(--background)]/80">
                Start with a single batch or wire up a continuous ingestion pipeline with
                audit-grade reporting.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Link
                href="/signup"
                className="rounded-full bg-[color:var(--background)] px-6 py-3 text-center text-sm font-semibold text-[color:var(--foreground)] transition hover:translate-y-[-1px]"
              >
                Start free
              </Link>
              <Link
                href="/support"
                className="rounded-full border border-[color:var(--background)]/40 px-6 py-3 text-center text-sm font-semibold text-[color:var(--background)]"
              >
                Talk to support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
