import "../styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import MarginLayout from "../layouts/MarginLayout/MarginLayout";
import { publicRoutes } from "../features/route/route-public";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MarginLayout>
      <Navbar routes={publicRoutes} />
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </MarginLayout>
  );
};

export default App;
