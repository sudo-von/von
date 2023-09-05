import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import Footer from "@common/components/footer/footer";
import Header from "@common/components/header/header";
import useSignin from "@signin/hooks/use-signin/use-signin";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import SigninForm from "@signin/components/signin-form/signin-form";
import ContainerLayout from "@common/layouts/container-layout/container-layout";

const Signin: NextPage = () => {
  const { credentials, error, handleOnChange, handleOnSubmit, loading } = useSignin();
  return (
    <MetaLayout description="Sign in into your account." title="Sign in to sudo-von.com">
      <ContainerLayout>
        <Header
          heading="Welcome back"
          subheading="Sign in into your account"
        />
        <SigninForm
          credentials={credentials}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          loading={loading}
        />
        <Footer
          heading="Sign up"
          path="signup"
          subheading="Don't have an account?"
        />
        {error && (
          <div className="my-5">
            <Alert variant="error">{error}</Alert>
          </div>
        )}
      </ContainerLayout>
    </MetaLayout>
  );
};

export default Signin;
