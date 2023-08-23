import { NextPage } from "next";
import Error from "../features/common/components/error/error";
import useLogin from "../features/login/hooks/use-login/use-login";
import LoginForm from "../features/login/components/login-form/login-form";
import FormFooter from "../features/common/components/form/components/form-footer/form-footer";
import FormHeader from "../features/common/components/form/components/form-header/form-header";
import { useContext } from "react";
import { AuthContext } from "../features/login/contexts/authentication-context/authentication-context";

const Login: NextPage = () => {
  const { error, isLoading, handleOnChange, handleOnSubmit, userCredentials } =
    useLogin();

  const { state } = useContext(AuthContext);
  console.log(state.isLoggedIn, state.user);
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
        <FormHeader
          heading="Welcome back"
          subheading="Sign in into your account"
        />
        <LoginForm
          isLoading={isLoading}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          userCredentials={userCredentials}
        />
        <FormFooter
          path="signup"
          heading="Sign up"
          subheading="Don't have an account?"
        />
        {error && (
          <div className="mt-4">
            <Error>{error}</Error>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
