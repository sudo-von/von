import { ChangeEventHandler, FC, FormEventHandler } from "react";
import Input from "../../../common/components/input/input";
import Button from "../../../common/components/button/button";
import PasswordInput from "../../../common/components/password-input/password-input";
import { Credentials } from "../../hooks/use-signin/use-signin.types";

type SigninFormProps = {
  loading: boolean;
  credentials: Credentials;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
};

const SigninForm: FC<SigninFormProps> = ({
  loading,
  credentials,
  handleOnChange,
  handleOnSubmit,
}) => {
  const { email, password } = credentials;
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
        <Button type="submit" disabled={loading} loading={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;
