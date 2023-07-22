import { NextPage } from "next";
import CenteredLayout from "../layouts/centered-layout/centered-layout";
import AuthLayout from "../features/auth/layouts/AuthLayout/AuthLayout";
import AuthBanner from "../features/auth/components/AuthBanner/AuthBanner";
import AuthFramedLink from "../features/auth/components/AuthFramedLink/AuthFramedLink";

const Signup: NextPage = () => {
  return (
    <CenteredLayout>
      <AuthLayout>
        <AuthBanner
          title="Create an account"
          description="Sign up for a new account"
        />
        <AuthFramedLink
          path="/login"
          name="Sign in"
          message="Have an account?"
        />
      </AuthLayout>
    </CenteredLayout>
  );
};

export default Signup;
