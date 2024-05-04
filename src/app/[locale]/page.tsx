import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default function IndexPage({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return <h1>{t("title")}</h1>;
}
