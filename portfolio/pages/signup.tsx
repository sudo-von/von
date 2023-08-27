import { NextPage } from "next";
import Alert from "../features/common/components/alert/alert";
import useSignup from "../features/signup/hooks/use-signup/use-signup";
import SignupForm from "../features/signup/components/signup-form/signup-form";
import FormHeader from "../features/common/components/form/components/form-header/form-header";
import FormFooter from "../features/common/components/form/components/form-footer/form-footer";

const Signup: NextPage = () => {
  const { account, error, handleOnChange, handleOnSubmit, loading } = useSignup();
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md">
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
          path="signin"
          heading="Sign in"
          subheading="Have an account?"
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

export default Signup;
