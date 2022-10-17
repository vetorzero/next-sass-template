import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import LocaleSwitcher from "../components/locale-switcher";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Messages", pageProps.messages);

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />

      <hr />

      <LocaleSwitcher />
    </NextIntlProvider>
  );
}

export default MyApp;
