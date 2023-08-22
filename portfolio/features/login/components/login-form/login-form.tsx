import { ChangeEventHandler, FC, FormEventHandler } from "react";
import Input from "../../../common/components/input/input";
import Button from "../../../common/components/button/button";
import { UserCredentials } from "../../hooks/use-login/use-login.types";
import PasswordInput from "../../../common/components/password-input/password-input";

type LoginFormProps = {
  isLoading: boolean;
  userCredentials: UserCredentials;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
};

const LoginForm: FC<LoginFormProps> = ({
  isLoading,
  handleOnChange,
  handleOnSubmit,
  userCredentials,
}) => {
  const { email, password } = userCredentials;
  return (
    <form className="flex flex-col gap-2.5 my-4" onSubmit={handleOnSubmit}>
      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        value={email}
        onChange={handleOnChange}
        placeholder="Enter your email"
        required
      />
      <PasswordInput
        id="password"
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={handleOnChange}
        placeholder="Enter your password"
        required
      />
      <div className="flex flex-col mt-4 mb-1.5">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
