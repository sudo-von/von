import "../styles/globals.css";
import { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";

const font = Lexend({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  const className = `${font.className} mt-64`;
  return (
    <Container>
      <Navbar />
      <main className={className}>
        <Component {...pageProps} />
      </main>
    </Container>
  );
};

export default App;
