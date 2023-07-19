import { NextPage } from "next";
import AuthLayout from "../features/auth/layouts/AuthLayout/AuthLayout";
import AuthBanner from "../features/auth/components/AuthBanner/AuthBanner";
import AuthFramedLink from "../features/auth/components/AuthFramedLink/AuthFramedLink";
import SignupForm from "../features/signup/components/SignupForm/SignupForm";
import useSignup from "../features/signup/hooks/useSignup";

const Signup: NextPage = () => {
  const { user, onSubmit, onHandleChange } = useSignup();
  return (
    <AuthLayout>
      <AuthBanner
        title="Create an account"
        description="Register for a new account"
      />
      <SignupForm
        onSubmit={onSubmit}
        user={user}
        onHandleChange={onHandleChange}
      />
      <AuthFramedLink path="/login" name="Sign in" message="Have an account?" />
    </AuthLayout>
  );
};

export default Signup;
