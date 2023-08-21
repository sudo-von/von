import { FC } from "react";
import useLogin from "../../hooks/use-login/use-login";
import Input from "../../../common/components/input/input";
import Button from "../../../common/components/button/button";
import PasswordInput from "../../../common/components/password-input/password-input";

type LoginFormProps = {};

const LoginForm: FC<LoginFormProps> = () => {
  const { loading, error, handleOnSubmit, handleOnChange, credentials } =
    useLogin();
  return (
    <form className="flex flex-col gap-4 my-6" onSubmit={handleOnSubmit}>
      <Input
        label="Email"
        name="email"
        placeholder="Enter your email"
        type="email"
        value={credentials.email}
        onChange={handleOnChange}
        required
      />
      <PasswordInput
        label="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
        value={credentials.password}
        onChange={handleOnChange}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Signing in..."}
      </Button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
