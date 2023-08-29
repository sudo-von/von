import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "../../../../services/cookie-service/cookie.service";
import { decodeToken } from "../../../../services/token-service/token.service";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { authLogin } from "../../../../services/api-service/auth-service/auth.service";
import { AuthenticationContext } from "../../../authentication/contexts/authentication-context/authentication-context";

const useSignin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { push } = useRouter();
  const { dispatch } = useContext(AuthenticationContext);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      const token = await authLogin({
        email: credentials.email,
        password: credentials.password,
      });

      setCookie("token", token);

      const { payload } = decodeToken(token);

      dispatch({ type: "LOG_IN", payload: {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        username: payload.username,
      }});

      push('/ask');
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

export default useSignin;
