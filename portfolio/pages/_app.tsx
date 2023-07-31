import "../styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import Navbar from "../components/navbar/navbar";
import MarginLayout from "../layouts/margin-layout/margin-layout";
import { publicRoutes } from "../components/navbar/navbar.routes";
import { MDXProvider } from "@mdx-js/react";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MDXProvider components={{}}>
      <MarginLayout>
        <Navbar routes={publicRoutes} />
        <main className={font.className}>
          <Component {...pageProps} />
        </main>
      </MarginLayout>
    </MDXProvider>
  );
};

export default App;
