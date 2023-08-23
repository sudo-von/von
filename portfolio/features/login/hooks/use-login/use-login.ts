import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { decodeToken } from "../../../../services/token-service/token.service";
import { setCookie } from "../../../../services/cookie-service/cookie.service";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { login } from "../../../../services/authentication-service/authentication-service/authentication.service";
import { AuthenticationContext } from "../../../authentication/contexts/authentication-context/authentication-context";

const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { dispatch } = useContext(AuthenticationContext);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCredentials((state) => ({ ...state, [name]: value }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      const token = await login(credentials);

      setCookie("token", token);

      const { payload } = decodeToken(token);
      const { id, name, email, username } = payload;

      dispatch({ type: "LOG_IN", payload: { id, name, email, username } });
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    credentials,
    handleOnSubmit,
    handleOnChange,
  };
};

export default useLogin;
