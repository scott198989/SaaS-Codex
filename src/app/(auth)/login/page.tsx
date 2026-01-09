import Link from "next/link";

type LoginPageProps = {
  searchParams?: { error?: string; verified?: string; reset?: string };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const errorMessage =
    searchParams?.error === "invalid"
      ? "Invalid email or password."
      : undefined;
  const verifiedMessage = searchParams?.verified
    ? "Email verified. You can sign in now."
    : undefined;
  const resetMessage = searchParams?.reset
    ? "Password updated. Sign in with your new password."
    : undefined;

  return (
    <div className="w-full rounded-3xl border border-[color:var(--border)] bg-white/70 p-8 shadow-elevated">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Welcome back
        </p>
        <h1 className="text-2xl font-semibold">Sign in to Havoc Data Forge</h1>
        <p className="text-sm text-[color:var(--muted)]">
          Access your workspaces and active processing runs.
        </p>
      </div>
      {errorMessage ? (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          {errorMessage}
        </div>
      ) : null}
      {verifiedMessage ? (
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
          {verifiedMessage}
        </div>
      ) : null}
      {resetMessage ? (
        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
          {resetMessage}
        </div>
      ) : null}
      <form className="mt-6 space-y-4 text-sm" method="post" action="/api/auth/login">
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
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
            Password
          </span>
          <input
            type="password"
            name="password"
            className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none"
            placeholder="••••••••"
          />
        </label>
        <button className="w-full rounded-full bg-[color:var(--foreground)] px-4 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated">
          Sign in
        </button>
      </form>
      <div className="mt-6 flex items-center justify-between text-xs text-[color:var(--muted)]">
        <Link href="/reset" className="font-semibold text-[color:var(--foreground)]">
          Forgot password?
        </Link>
        <Link href="/signup" className="font-semibold text-[color:var(--foreground)]">
          Create account
        </Link>
      </div>
    </div>
  );
}
