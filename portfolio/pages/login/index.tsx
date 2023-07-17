import { NextPage } from "next";
import LoginForm from "../../features/Login/components/LoginForm/LoginForm";
import AuthHeader from "../../features/Auth/components/AuthHeader/AuthHeader";
import AuthRedirect from "../../features/Auth/components/AuthRedirect/AuthRedirect";
import AuthContainer from "../../features/Auth/components/AuthContainer/AuthContainer";

const Login: NextPage = () => {
  return (
    <AuthContainer>
      <AuthHeader
        title="Welcome back"
        description="Sign in into your account"
      />
      <LoginForm />
      <AuthRedirect
        name="Sign up"
        path="/signup"
        message="Don't have an account?"
      />
    </AuthContainer>
  );
};

export default Login;
