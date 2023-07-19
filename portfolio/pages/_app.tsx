import "../styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import MarginLayout from "../layouts/MarginLayout/MarginLayout";
import HeightLayout from "../layouts/HeightLayout/HeightLayout";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MarginLayout>
      <Navbar />
      <HeightLayout>
        <main className={font.className}>
          <Component {...pageProps} />
        </main>
      </HeightLayout>
    </MarginLayout>
  );
};

export default App;
