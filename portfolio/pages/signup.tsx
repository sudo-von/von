import { NextPage } from "next";
import Alert from "../features/common/components/alert/alert";
import useSignup from "../features/signup/hooks/use-signup/use-signup";
import SignupForm from "../features/signup/components/signup-form/signup-form";
import FormFooter from "../features/common/components/form/components/form-footer/form-footer";
import FormHeader from "../features/common/components/form/components/form-header/form-header";

const Signup: NextPage = () => {
  const { account, error, handleOnChange, handleOnSubmit, loading, success } =
    useSignup();
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
        <FormHeader
          heading="Create an account"
          subheading="Sign up for a new account"
        />
        <SignupForm
          account={account}
          loading={loading}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
        <FormFooter
          path="login"
          heading="Sign in"
          subheading="Have an account?"
        />
        {error && (
          <div className="mt-4">
            <Alert size="error">{error}</Alert>
          </div>
        )}
        {success && (
          <div className="mt-4">
            <Alert size="success">{success}</Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
