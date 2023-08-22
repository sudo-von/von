import useLogin from "../../hooks/use-login/use-login";
import Input from "../../../common/components/input/input";
import Button from "../../../common/components/button/button";
import PasswordInput from "../../../common/components/password-input/password-input";

const LoginForm = () => {
  const { credentials, error, loading, handleOnChange, handleOnSubmit } =
    useLogin();
  return (
    <form className="flex flex-col gap-2 my-4" onSubmit={handleOnSubmit}>
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
      <div className="flex flex-col mt-4 mb-1.5">
        <Button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
