import "../styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import Navbar from "../features/common/components/navbar/navbar";
import MarginLayout from "../layouts/margin-layout/margin-layout";
import { publicRoutes } from "../features/common/components/navbar/navbar.routes";
import { MDXProvider } from "@mdx-js/react";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  console.log("hey");
  return (
    <MDXProvider components={{}}>
      <MarginLayout>
        <main className={font.className}>
          <Navbar routes={publicRoutes} />
          <Component {...pageProps} />
        </main>
      </MarginLayout>
    </MDXProvider>
  );
};

export default App;
