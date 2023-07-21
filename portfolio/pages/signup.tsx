import { NextPage } from "next";
import useSignup from "../features/signup/hooks/useSignup";
import CenteredLayout from "../layouts/CenteredLayout/CenteredLayout";
import AuthLayout from "../features/auth/layouts/AuthLayout/AuthLayout";
import AuthBanner from "../features/auth/components/AuthBanner/AuthBanner";
import SignupForm from "../features/signup/components/SignupForm/SignupForm";
import AuthFramedLink from "../features/auth/components/AuthFramedLink/AuthFramedLink";

const Signup: NextPage = () => {
  const { user, onSubmit, onHandleChange } = useSignup();
  return (
    <CenteredLayout>
      <AuthLayout>
        <AuthBanner
          title="Create an account"
          description="Sign up for a new account"
        />
        <SignupForm
          onSubmit={onSubmit}
          user={user}
          onHandleChange={onHandleChange}
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
