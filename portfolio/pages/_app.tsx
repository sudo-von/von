import "../styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={font.className}>
      <Component {...pageProps} />;
    </main>
  );
};

export default App;
