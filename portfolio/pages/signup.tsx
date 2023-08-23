import { NextPage } from "next";
import Error from "../features/common/components/error/error";
import useLogin from "../features/login/hooks/use-login/use-login";
import LoginForm from "../features/login/components/login-form/login-form";
import FormFooter from "../features/common/components/form/components/form-footer/form-footer";
import FormHeader from "../features/common/components/form/components/form-header/form-header";

const Signup: NextPage = () => {
  const { error, isLoading, handleOnChange, handleOnSubmit, userCredentials } =
    useLogin();
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
        <FormHeader
          heading="Create an account"
          subheading="Register for a new account"
        />
        <LoginForm
          loading={isLoading}
          handleOnChange={handleOnChange}
          handleLogin={handleOnSubmit}
          credentials={userCredentials}
        />
        <div className="flex flex-col mb-4">
          <FormFooter
            path="login"
            heading="Log in"
            subheading="Have an account?"
          />
        </div>
        {error && <Error>{error}</Error>}
      </div>
    </div>
  );
};

export default Signup;
