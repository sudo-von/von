import { NextPage } from "next";
import useLogin from "../features/Login/hooks/useLogin";
import AuthLayout from "../features/Auth/layouts/AuthLayout/AuthLayout";
import LoginForm from "../features/Login/components/LoginForm/LoginForm";
import AuthBanner from "../features/Auth/components/AuthBanner/AuthBanner";
import AuthFramedLink from "../features/Auth/components/AuthFramedLink/AuthFramedLink";

const Login: NextPage = () => {
  const { onSubmit, credentials, onHandleChange } = useLogin();
  return (
    <AuthLayout>
      <AuthBanner
        title="Welcome back"
        description="Sign in into your account"
      />
      <LoginForm
        onSubmit={onSubmit}
        credentials={credentials}
        onHandleChange={onHandleChange}
      />
      <AuthFramedLink
        path="/signup"
        name="Sign up"
        message="Don't have an account?"
      />
    </AuthLayout>
  );
};

export default Login;
