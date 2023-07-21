import { ChangeEvent, FC, FormEvent } from "react";
import { Credentials } from "../../hooks/useLogin";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import PasswordInput from "../../../../components/password-input/password-input";

type LoginFormProps = {
  credentials: Credentials;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  credentials,
  onHandleChange,
}) => {
  const { email, password } = credentials;
  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <Input
        name="email"
        type="email"
        value={email}
        onChange={onHandleChange}
        placeholder="Enter your email"
      />
      <PasswordInput
        name="password"
        type="password"
        value={password}
        onChange={onHandleChange}
        placeholder="Enter your password"
      />
      <Button>Sign in</Button>
    </form>
  );
};

export default LoginForm;
