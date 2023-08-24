import { NextPage } from "next";
import Error from "../features/common/components/alert/alert";
import useLogin from "../features/login/hooks/use-login/use-login";
import LoginForm from "../features/login/components/login-form/login-form";
import FormFooter from "../features/common/components/form/components/form-footer/form-footer";
import FormHeader from "../features/common/components/form/components/form-header/form-header";

const Login: NextPage = () => {
  const { credentials, error, handleOnChange, handleOnSubmit, loading } =
    useLogin();
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
        <FormHeader
          heading="Welcome back"
          subheading="Sign in into your account"
        />
        <LoginForm
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
          <div className="mt-4">
            <Error>{error}</Error>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
