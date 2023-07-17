import { NextPage } from "next";
import AuthHeader from "../../features/Auth/components/AuthHeader/AuthHeader";
import SignupForm from "../../features/Signup/components/SignupForm/SignupForm";
import AuthRedirect from "../../features/Auth/components/AuthRedirect/AuthRedirect";
import AuthContainer from "../../features/Auth/components/AuthContainer/AuthContainer";

const Signup: NextPage = () => {
  return (
    <AuthContainer>
      <AuthHeader
        title="Create an account"
        description="Register for a new account"
      />
      <SignupForm />
      <AuthRedirect name="Log in" path="/login" message="Have an account?" />
    </AuthContainer>
  );
};

export default Signup;
