import { NextPage } from "next";
import CenteredLayout from "../layouts/centered-layout/centered-layout";
import AuthLayout from "../features/auth/layouts/AuthLayout/AuthLayout";
import AuthBanner from "../features/auth/components/AuthBanner/AuthBanner";
import AuthFramedLink from "../features/auth/components/AuthFramedLink/AuthFramedLink";

const Login: NextPage = () => {
  return (
    <CenteredLayout>
      <AuthLayout>
        <AuthBanner
          title="Welcome back"
          description="Sign in into your account"
        />
        <AuthFramedLink
          path="/signup"
          name="Sign up"
          message="Don't have an account?"
        />
      </AuthLayout>
    </CenteredLayout>
  );
};

export default Login;
