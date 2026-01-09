import Link from "next/link";

type SignupPageProps = {
  searchParams?: { error?: string };
};

export default function SignupPage({ searchParams }: SignupPageProps) {
  const errorMessage =
    searchParams?.error === "exists"
      ? "That email already has an account."
      : searchParams?.error === "invalid"
        ? "Please complete all fields."
        : undefined;

  return (
    <div className="w-full rounded-3xl border border-[color:var(--border)] bg-white/70 p-8 shadow-elevated">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Get started
        </p>
        <h1 className="text-2xl font-semibold">Create your workspace</h1>
        <p className="text-sm text-[color:var(--muted)]">
          Build a clean, audited data export with full provenance tracking.
        </p>
      </div>
      {errorMessage ? (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          {errorMessage}
        </div>
      ) : null}
      <form className="mt-6 space-y-4 text-sm" method="post" action="/api/auth/signup">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Full name
          </span>
          <input
            type="text"
            name="name"
            className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none"
            placeholder="Alex Morgan"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Work email
          </span>
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none"
            placeholder="you@company.com"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Password
          </span>
          <input
            type="password"
            name="password"
            className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none"
            placeholder="Create a strong password"
          />
        </label>
        <button className="w-full rounded-full bg-[color:var(--foreground)] px-4 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated">
          Create account
        </button>
      </form>
      <p className="mt-6 text-xs text-[color:var(--muted)]">
        By creating an account, you agree to the terms and receive email verification links.
      </p>
      <div className="mt-4 text-xs text-[color:var(--muted)]">
        Already have access?{" "}
        <Link href="/login" className="font-semibold text-[color:var(--foreground)]">
          Sign in
        </Link>
      </div>
    </div>
  );
}
