import { NextPage } from "next";
import LoginForm from "../features/login/components/login-form/login-form";
import FormFooter from "../features/common/components/form/components/form-footer/form-footer";
import FormHeader from "../features/common/components/form/components/form-header/form-header";

const Login: NextPage = () => {
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
        <FormHeader
          heading="Welcome back"
          subheading="Sign in into your account"
        />
        <LoginForm />
        <div className="flex flex-col text-center">
          <FormFooter
            path="login"
            heading="Sign up"
            subheading="Don't have an account?"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
