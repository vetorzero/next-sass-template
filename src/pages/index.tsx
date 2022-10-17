import type { GetStaticPropsContext, NextPage } from "next";
import { useTranslations } from "next-intl";

const Home: NextPage = () => {
  const t = useTranslations();

  return <>MSG: {t("hello")}</>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`/messages/${locale}.json`)).default,
    },
  };
}

export default Home;
