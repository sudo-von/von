import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import Footer from "@common/components/footer/footer";
import Header from "@common/components/header/header";
import useSignup from "@signup/hooks/use-signup/use-signup";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import SignupForm from "@signup/components/signup-form/signup-form";
import ContainerLayout from "@common/layouts/container-layout/container-layout";

const Signup: NextPage = () => {
  const { account, error, handleOnChange, handleOnSubmit, loading } = useSignup();
  return (
    <MetaLayout description="Sign up for a new account." title="Sign up to sudo-von.com">
      <ContainerLayout>
        <Header
          heading="Create an account"
          subheading="Sign up for a new account"
        />
        <SignupForm
          account={account}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          loading={loading}
        />
        <Footer
          heading="Sign in"
          path="signin"
          subheading="Have an account?"
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

export default Signup;
