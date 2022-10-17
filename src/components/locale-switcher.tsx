import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const t = useTranslations();

  const router = useRouter();
  function changeLocale(locale: string) {
    router.push(router.route, undefined, { locale });
  }

  return (
    <>
      <button type="button" onClick={() => changeLocale("en")}>
        en
      </button>
      <button type="button" onClick={() => changeLocale("pt")}>
        pt
      </button>
      <button type="button" onClick={() => changeLocale("es")}>
        es
      </button>
    </>

    // <Link href={route} locale={otherLocale}>
    //   <a>{t("switchLocale", { locale: otherLocale })}</a>
    // </Link>
  );
}
