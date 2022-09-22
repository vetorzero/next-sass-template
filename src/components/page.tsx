import Head from "next/head";
import { PropsWithChildren } from "react";

const DEFAULT_DESCRIPTION = "";
const DEFAULT_IMAGE = "";
const SITE_TITLE = "";

type PageProps = PropsWithChildren & {
  title?: string;
  description?: string;
  image?: string;
};

export default function Page({ children, title, image, description }: PageProps) {
  return (
    <>
      <Head>
        <title>{(title ? `${title} - ` : "") + SITE_TITLE}</title>
        <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
        <meta name="og:image" content={image ?? DEFAULT_IMAGE} />
      </Head>

      {children}
    </>
  );
}
