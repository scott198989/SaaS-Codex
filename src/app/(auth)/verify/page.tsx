import Link from "next/link";

type VerifyPageProps = {
  searchParams?: { email?: string; error?: string };
};

export default function VerifyPage({ searchParams }: VerifyPageProps) {
  const errorMessage =
    searchParams?.error === "expired"
      ? "Verification link expired. Request a new link."
      : searchParams?.error === "verify"
        ? "Verify your email to continue."
        : undefined;

  return (
    <div className="w-full rounded-3xl border border-[color:var(--border)] bg-white/70 p-8 shadow-elevated">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          Verify email
        </p>
        <h1 className="text-2xl font-semibold">Check your inbox</h1>
        <p className="text-sm text-[color:var(--muted)]">
          We sent a verification link to finish activating your account.
        </p>
      </div>
      {errorMessage ? (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          {errorMessage}
        </div>
      ) : null}
      <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 text-sm text-[color:var(--muted)]">
        {searchParams?.email
          ? `Verification email sent to ${searchParams.email}.`
          : "If you do not see the message, check spam or resend the verification email."}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="rounded-full bg-[color:var(--foreground)] px-4 py-2 text-sm font-semibold text-[color:var(--background)] shadow-elevated">
          Resend email
        </button>
        <Link
          href="/login"
          className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-semibold text-[color:var(--foreground)]"
        >
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
