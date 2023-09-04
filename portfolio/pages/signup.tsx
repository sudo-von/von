import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import useSignup from "@signup/hooks/use-signup/use-signup";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import SignupForm from "@signup/components/signup-form/signup-form";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import FormFooter from "@common/components/form/components/form-footer/form-footer";
import FormHeader from "@common/components/form/components/form-header/form-header";

const Signup: NextPage = () => {
  const { account, error, handleOnChange, handleOnSubmit, loading } = useSignup();
  return (
    <MetaLayout description="Sign up for a new account." title="Sign up to sudo-von.com">
      <ContainerLayout>
        <FormHeader
          heading="Create an account"
          subheading="Sign up for a new account"
        />
        <SignupForm
          account={account}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          loading={loading}
        />
        <FormFooter
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
