import { getLocale } from "@/lib/i18n";

export default async function PrivacyPage() {
  const locale = await getLocale();
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-2)]">
          {locale === "en" ? "Privacy" : "Privacidad"}
        </p>
        <h1 className="font-display text-3xl font-semibold text-[color:var(--foreground)]">
          {locale === "en"
            ? "Your lists stay private."
            : "Tus listas permanecen privadas."}
        </h1>
        <p className="text-[color:var(--muted)]">
          {locale === "en"
            ? "LoopList only stores the data you enter and uses it to deliver reminders."
            : "LoopList solo almacena los datos que ingresas y los usa para recordatorios."}
        </p>
      </div>
      <div className="mt-10 grid gap-4 text-sm text-[color:var(--muted)]">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          {locale === "en"
            ? "We do not sell your data. You can delete your account and lists at any time."
            : "No vendemos tus datos. Puedes eliminar tu cuenta y listas cuando quieras."}
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
          {locale === "en"
            ? "Email reminders can be turned off per list."
            : "Los recordatorios por correo se pueden desactivar por lista."}
        </div>
      </div>
    </section>
  );
}
