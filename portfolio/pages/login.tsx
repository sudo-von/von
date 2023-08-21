import { NextPage } from "next";
import Header from "../features/common/components/header/header";
import AuthLayout from "../features/auth/layouts/AuthLayout/AuthLayout";
import CenteredLayout from "../layouts/centered-layout/centered-layout";
import LoginForm from "../features/login/components/login-form/login-form";

const Login: NextPage = () => {
  return (
    <CenteredLayout>
      <AuthLayout>
        <Header heading="Welcome back" subheading="Sign in into your account" />
        <LoginForm />
      </AuthLayout>
    </CenteredLayout>
  );
};

export default Login;
