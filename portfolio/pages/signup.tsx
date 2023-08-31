import { NextPage } from "next";
import Alert from "@common/components/alert/alert";
import useSignup from "@signup/hooks/use-signup/use-signup";
import SignupForm from "@signup/components/signup-form/signup-form";
import FormHeader from "@common/components/form/components/form-header/form-header";
import FormFooter from "@common/components/form/components/form-footer/form-footer";

const Signup: NextPage = () => {
  const { account, error, handleOnChange, handleOnSubmit, loading } = useSignup();
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
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
      </div>
    </div>
  );
};

export default Signup;
