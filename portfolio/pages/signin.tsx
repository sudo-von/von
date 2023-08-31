import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import useSignin from "@signin/hooks/use-signin/use-signin";
import SigninForm from "@signin/components/signin-form/signin-form";
import FormHeader from "@common/components/form/components/form-header/form-header";
import FormFooter from "@common/components/form/components/form-footer/form-footer";

const Signin: NextPage = () => {
  const { credentials, error, handleOnChange, handleOnSubmit, loading } = useSignin();
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
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
      </div>
    </div>
  );
};

export default Signin;
