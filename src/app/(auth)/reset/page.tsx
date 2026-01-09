import Link from "next/link";

type ResetPageProps = {
  searchParams?: { token?: string; sent?: string; error?: string };
};

export default function ResetPage({ searchParams }: ResetPageProps) {
  const errorMessage =
    searchParams?.error === "expired"
      ? "Reset link expired. Request a new one."
      : searchParams?.error === "invalid"
        ? "Enter a valid email or password."
        : undefined;
  const successMessage = searchParams?.sent
    ? "If an account exists, a reset link is on the way."
    : undefined;
  const token = searchParams?.token;

  return (
    <div className="w-full rounded-3xl border border-[color:var(--border)] bg-white/70 p-8 shadow-elevated">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Password reset
        </p>
        <h1 className="text-2xl font-semibold">
          {token ? "Set a new password" : "Request a reset link"}
        </h1>
        <p className="text-sm text-[color:var(--muted)]">
          {token
            ? "Choose a strong password to regain access."
            : "We will email a secure link to reset your password."}
        </p>
      </div>
      {errorMessage ? (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          {errorMessage}
        </div>
      ) : null}
      {successMessage ? (
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
          {successMessage}
        </div>
      ) : null}
      {token ? (
        <form
          className="mt-6 space-y-4 text-sm"
          method="post"
          action="/api/auth/reset/confirm"
        >
          <input type="hidden" name="token" value={token} />
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              New password
            </span>
            <input
              type="password"
              name="password"
              className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none"
              placeholder="Choose a strong password"
            />
          </label>
          <button className="w-full rounded-full bg-[color:var(--foreground)] px-4 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated">
            Update password
          </button>
        </form>
      ) : (
        <form className="mt-6 space-y-4 text-sm" method="post" action="/api/auth/reset">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none"
              placeholder="you@company.com"
            />
          </label>
          <button className="w-full rounded-full bg-[color:var(--foreground)] px-4 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated">
            Send reset link
          </button>
        </form>
      )}
      <div className="mt-6 text-xs text-[color:var(--muted)]">
        Remembered your password?{" "}
        <Link href="/login" className="font-semibold text-[color:var(--foreground)]">
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
