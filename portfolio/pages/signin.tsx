import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import useSignin from "@signin/hooks/use-signin/use-signin";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import SigninForm from "@signin/components/signin-form/signin-form";
import ContainerLayout from "@common/layouts/container-layout/container-layout";
import FormFooter from "@common/components/form/components/form-footer/form-footer";
import FormHeader from "@common/components/form/components/form-header/form-header";

const Signin: NextPage = () => {
  const { credentials, error, handleOnChange, handleOnSubmit, loading } = useSignin();
  return (
    <MetaLayout description="Sign in into your account." title="Sign in">
      <ContainerLayout>
        <FormHeader
          heading="Welcome back"
          subheading="Sign in into your account"
        />
        <SigninForm
          credentials={credentials}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          loading={loading}
        />
        <FormFooter
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
