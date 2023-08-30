import { ChangeEventHandler, FC, FormEventHandler } from "react";
import Input from "../../../common/components/input/input";
import Button from "../../../common/components/button/button";
import { Account } from "../../hooks/use-signup/use-signup.types";
import PasswordInput from "../../../common/components/password-input/password-input";

type SignupFormProps = {
  account: Account;
  loading: boolean;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
};

const SignupForm: FC<SignupFormProps> = ({
  account,
  loading,
  handleOnChange,
  handleOnSubmit,
}) => {
  const { email, name, password, username } = account;
  return (
    <form autoComplete="off" className="flex flex-col gap-2.5 my-4" onSubmit={handleOnSubmit}>
      <Input
        id="name"
        name="name"
        type="text"
        label="Name"
        value={name}
        onChange={handleOnChange}
        placeholder="Enter your name"
        required
      />
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
      <Input
        id="username"
        name="username"
        type="text"
        label="Username"
        value={username}
        onChange={handleOnChange}
        placeholder="Enter your username"
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
        <Button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
