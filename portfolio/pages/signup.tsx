import { NextPage } from "next";
import AuthLayout from "../features/Auth/layouts/AuthLayout/AuthLayout";
import AuthBanner from "../features/Auth/components/AuthBanner/AuthBanner";
import AuthFramedLink from "../features/Auth/components/AuthFramedLink/AuthFramedLink";
import SignupForm from "../features/Signup/components/SignupForm/SignupForm";
import useSignup from "../features/Signup/hooks/useSignup";

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
