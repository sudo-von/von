import Head from "next/head";
import { FC, ReactNode } from "react";
import { useRouter } from "next/router";

type MetaLayoutProps = {
  author?: string;
  children: ReactNode;
  description?: string;
  keywords?: string;
  title?: string;
  username?: string;
};

const MetaLayout: FC<MetaLayoutProps> = ({
  author = "sudo_von",
  children,
  description = "",
  keywords = "",
  title = "Portfolio | sudo_von",
  username = "sudo_von",
}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="og:url" content={router.basePath} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={"@" + username}></meta>
        <meta name="twitter:site" content={"@" + username}></meta>
        <meta name="twitter:title" content={title}></meta>
        <meta name="twitter:description" content={description}></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      </Head>
      {children}
    </>
  );
};

export default MetaLayout;
