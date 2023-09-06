import "@common/styles/globals.css";
import { AppProps } from "next/app";
import Navbar from "@common/components/navbar/navbar";
import FontLayout from "@common/layouts/font-layout/font-layout";
import MarginLayout from "@common/layouts/margin-layout/margin-layout";
import AuthenticationProvider from "@authentication/providers/authentication-provider/authentication-provider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthenticationProvider>
      <MarginLayout>
        <FontLayout>
          <Navbar />
          <Component {...pageProps} />
        </FontLayout>
      </MarginLayout>
    </AuthenticationProvider>
  );
};

export default App;
