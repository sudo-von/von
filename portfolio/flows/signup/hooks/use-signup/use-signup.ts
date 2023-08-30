import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { Account } from "./use-signup.types";
import { setCookie } from "../../../../services/cookie-service/cookie.service";
import { decodeToken } from "../../../../services/token-service/token.service";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { authLogin, authSignup } from "../../../../services/api-service/auth-service/auth.service";
import { AuthenticationContext } from "../../../authentication/contexts/authentication-context/authentication-context";

const useSignup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState<Account>({
    email: "",
    name: "",
    password: "",
    username: "",
  });

  const { push } = useRouter();
  const { dispatch } = useContext(AuthenticationContext);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      await authSignup({
        email: account.email,
        name: account.name,
        password: account.password,
        username: account.username,
      });

      const token = await authLogin({
        email: account.email,
        password: account.password,
      });

      setCookie("token", token);

      const { payload } = decodeToken(token);

      dispatch({ type: "LOG_IN", payload: {
        id: payload.id,
        email: payload.email,
        name: payload.name,
        username: payload.username,
      }});

      push("/ask");
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  return {
    account,
    error,
    loading,
    handleOnChange,
    handleOnSubmit,
  };
};

export default useSignup;
