import { NextPage } from "next";
import Alert from "../features/common/components/alert/alert";
import useSignin from "../features/signin/hooks/use-signin/use-signin";
import SigninForm from "../features/signin/components/signin-form/signin-form";
import FormHeader from "../features/common/components/form/components/form-header/form-header";
import FormFooter from "../features/common/components/form/components/form-footer/form-footer";

const Signin: NextPage = () => {
  const { credentials, error, handleOnChange, handleOnSubmit, loading } = useSignin();
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md">
        <FormHeader
          heading="Welcome back"
          subheading="Sign in into your account"
        />
        <SigninForm
          loading={loading}
          credentials={credentials}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
        <FormFooter
          path="signup"
          heading="Sign up"
          subheading="Don't have an account?"
        />
        {error && (
          <div className="mt-5">
            <Alert variant="error">{error}</Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signin;
