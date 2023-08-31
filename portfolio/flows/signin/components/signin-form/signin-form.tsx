import { ChangeEventHandler, FC, FormEventHandler } from "react";
import Input from "@common/components/input/input";
import Button from "@common/components/button/button";
import { Credentials } from "@signin/hooks/use-signin/use-signin.types";
import PasswordInput from "@common/components/password-input/password-input";

type SigninFormProps = {
  credentials: Credentials;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  loading: boolean;
};

const SigninForm: FC<SigninFormProps> = ({
  credentials,
  handleOnChange,
  handleOnSubmit,
  loading,
}) => {
  const { email, password } = credentials;
  return (
    <form autoComplete="off" className="flex flex-col gap-2.5 my-2.5" onSubmit={handleOnSubmit}>
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
      <div className="flex flex-col mt-5">
        <Button disabled={loading} loading={loading} type="submit">
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;
