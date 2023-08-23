import "../styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../features/common/components/navbar/navbar";
import MarginLayout from "../layouts/margin-layout/margin-layout";
import { publicRoutes } from "../features/common/components/navbar/navbar.routes";
import AuthenticationProvider from "../features/authentication/providers/authentication-provider/authentication-provider";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  console.log("hey");
  return (
    <AuthenticationProvider>
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
