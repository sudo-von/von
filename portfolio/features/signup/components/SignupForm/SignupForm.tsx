import { ChangeEvent, FC, FormEvent } from "react";
import { User } from "../../hooks/useSignup";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import PasswordInput from "../../../../components/PasswordInput/PasswordInput";

type LoginFormProps = {
  user: User;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SignupForm: FC<LoginFormProps> = ({ onSubmit, user, onHandleChange }) => {
  const { name, email, username, password } = user;
  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <Input
        name="name"
        type="text"
        value={name}
        onChange={onHandleChange}
        placeholder="Enter your name"
      />
      <Input
        name="email"
        type="email"
        value={email}
        onChange={onHandleChange}
        placeholder="Enter your email"
      />
      <Input
        name="username"
        type="text"
        value={username}
        onChange={onHandleChange}
        placeholder="Enter your username"
      />
      <PasswordInput
        name="password"
        type="password"
        value={password}
        onChange={onHandleChange}
        placeholder="Enter your password"
      />
      <Button>Sign up</Button>
    </form>
  );
};

export default SignupForm;
