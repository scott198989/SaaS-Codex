import Link from "next/link";
import { getLocale, getTranslations } from "@/lib/i18n";

export default async function MarketingHome() {
  const locale = await getLocale();
  const t = getTranslations(locale);

  return (
    <div>
      <section className="bg-grid border-b border-[color:var(--border)]">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              {t.hero.kicker}
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[color:var(--foreground)] md:text-5xl">
              {t.hero.title}
            </h1>
            <p className="max-w-xl text-lg text-[color:var(--muted)]">{t.hero.subtitle}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated transition hover:translate-y-[-1px]"
              >
                {t.hero.ctaPrimary}
              </Link>
              <a
                href="#how"
                className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--foreground)]"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="grid gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5 text-sm text-[color:var(--muted)]">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[color:var(--foreground)]">
                  {t.features.items[0].title}
                </span>
                <span className="rounded-full bg-[color:var(--panel-strong)] px-3 py-1 text-xs">
                  CDT
                </span>
              </div>
              <p>{t.features.items[1].copy}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-elevated">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                {t.useCases.title}
              </p>
              <span className="rounded-full bg-[color:var(--foreground)] px-3 py-1 text-xs text-[color:var(--background)]">
                Live
              </span>
            </div>
            <div className="mt-6 space-y-4 text-sm text-[color:var(--muted)]">
              {t.useCases.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[color:var(--border)] bg-white/70 p-4"
                >
                  <p className="font-semibold text-[color:var(--foreground)]">{item}</p>
                  <p className="mt-2">
                    {locale === "en"
                      ? "Rotate tasks fairly with one shared list."
                      : "Rota tareas de forma justa con una lista compartida."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              {t.nav.features}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {t.features.title}
            </h2>
            <p className="mt-4 text-[color:var(--muted)]">
              {locale === "en"
                ? "LoopList is designed for real people juggling real routines. Keep it light, keep it fair, keep it moving."
                : "LoopList esta pensado para personas reales con rutinas reales. Facil, justo y siempre en movimiento."}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.features.items.map((item) => (
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

      <section id="how" className="border-y border-[color:var(--border)] bg-[color:var(--panel)]/70">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              {t.nav.how}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {t.how.title}
            </h2>
            <p className="mt-4 text-[color:var(--muted)]">
              {locale === "en"
                ? "No learning curve. Just pick a list and let LoopList handle the turns."
                : "Sin curva de aprendizaje. Elige una lista y deja que LoopList reparta los turnos."}
            </p>
            <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-white/70 p-5 text-sm text-[color:var(--muted)]">
              <p className="font-semibold text-[color:var(--foreground)]">
                {locale === "en" ? "CDT reminders" : "Recordatorios en CDT"}
              </p>
              <p className="mt-2">
                {locale === "en"
                  ? "Set a preferred hour and LoopList keeps it consistent for everyone."
                  : "Configura una hora y LoopList la mantiene para todos."}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {t.how.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-[color:var(--border)] bg-white/70 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--foreground)] text-sm font-semibold text-[color:var(--background)]">
                  {index + 1}
                </div>
                <div>
                  <p className="text-base font-semibold text-[color:var(--foreground)]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
              {t.nav.pricing}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {t.pricing.title}
            </h2>
            <p className="mt-4 text-[color:var(--muted)]">{t.pricing.note}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-semibold text-[color:var(--background)] shadow-elevated transition hover:translate-y-[-1px]"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--foreground)]"
              >
                {t.nav.login}
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
                  {plan.name}
                </p>
                <p className="mt-3 text-2xl font-semibold text-[color:var(--foreground)]">
                  {plan.price}
                </p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-xs text-[color:var(--muted)]">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--foreground)] p-10 text-[color:var(--background)] shadow-elevated">
          <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--background)]/70">
                {t.footer.tagline}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                {locale === "en"
                  ? "Make rotations feel effortless."
                  : "Haz que las rotaciones sean faciles."}
              </h2>
              <p className="mt-3 text-sm text-[color:var(--background)]/80">
                {locale === "en"
                  ? "LoopList was built to keep everyday tasks light, fair, and visible."
                  : "LoopList esta hecho para que las tareas diarias sean claras y justas."}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Link
                href="/signup"
                className="rounded-full bg-[color:var(--background)] px-6 py-3 text-center text-sm font-semibold text-[color:var(--foreground)] transition hover:translate-y-[-1px]"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="/support"
                className="rounded-full border border-[color:var(--background)]/40 px-6 py-3 text-center text-sm font-semibold text-[color:var(--background)]"
              >
                {t.footer.support}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
