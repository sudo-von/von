import { NextPage } from "next";
import useLogin from "../features/login/hooks/useLogin";
import AuthLayout from "../features/auth/layouts/AuthLayout/AuthLayout";
import LoginForm from "../features/login/components/LoginForm/LoginForm";
import AuthBanner from "../features/auth/components/AuthBanner/AuthBanner";
import AuthFramedLink from "../features/auth/components/AuthFramedLink/AuthFramedLink";

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
