import "@common/styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../flows/common/components/navbar/navbar";
import MarginLayout from "../flows/common/layouts/margin-layout/margin-layout";
import AuthenticationProvider from "../flows/authentication/providers/authentication-provider/authentication-provider";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthenticationProvider>
      <MDXProvider components={{}}>
        <MarginLayout>
          <main className={font.className}>
            <Navbar />
            <Component {...pageProps} />
          </main>
        </MarginLayout>
      </MDXProvider>
    </AuthenticationProvider>
  );
};

export default App;
