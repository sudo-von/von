import "../styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../flows/common/components/navbar/navbar";
import MarginLayout from "../layouts/margin-layout/margin-layout";
import { publicRoutes } from "../flows/common/components/navbar/navbar.routes";
import AuthenticationProvider from "../flows/authentication/providers/authentication-provider/authentication-provider";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthenticationProvider>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <MDXProvider components={{}}>
        <MarginLayout>
          <main className={font.className}>
            <Navbar routes={publicRoutes} />
            <Component {...pageProps} />
          </main>
        </MarginLayout>
      </MDXProvider>
    </AuthenticationProvider>
  );
};

export default App;
