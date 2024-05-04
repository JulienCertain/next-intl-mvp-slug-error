import { unstable_setRequestLocale } from "next-intl/server";

const locales = ["en", "de"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
