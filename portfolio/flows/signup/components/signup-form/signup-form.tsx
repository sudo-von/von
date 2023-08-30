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
        label="Name"
        name="name"
        onChange={handleOnChange}
        placeholder="Enter your name"
        required
        type="text"
        value={name}
      />
      <Input
        id="email"
        label="Email"
        name="email"
        onChange={handleOnChange}
        placeholder="Enter your email"
        required
        type="email"
        value={email}
      />
      <Input
        id="username"
        label="Username"
        name="username"
        onChange={handleOnChange}
        placeholder="Enter your username"
        required
        type="text"
        value={username}
      />
      <PasswordInput
        id="password"
        label="Password"
        name="password"
        onChange={handleOnChange}
        placeholder="Enter your password"
        required
        type="password"
        value={password}
      />
      <div className="flex flex-col mt-4 mb-1.5">
        <Button disabled={loading} loading={loading} type="submit">
          {loading ? "Signing up..." : "Sign up"}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
