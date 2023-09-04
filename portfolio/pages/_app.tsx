import "@common/styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import Navbar from "@common/components/navbar/navbar";
import MarginLayout from "@common/layouts/margin-layout/margin-layout";
import AuthenticationProvider from "@authentication/providers/authentication-provider/authentication-provider";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthenticationProvider>
      <MarginLayout>
        <main className={font.className}>
          <Navbar />
          <Component {...pageProps} />
        </main>
      </MarginLayout>
    </AuthenticationProvider>
  );
};

export default App;
