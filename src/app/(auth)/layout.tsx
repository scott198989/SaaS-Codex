import { LanguageToggle } from "@/components/language-toggle";
import { getLocale } from "@/lib/i18n";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-12">
        <div className="flex justify-end">
          <LanguageToggle locale={locale} redirectTo="/" />
        </div>
        <div className="mt-8 flex-1">{children}</div>
      </div>
    </div>
  );
}
