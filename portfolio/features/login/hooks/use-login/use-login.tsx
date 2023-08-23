import { UserCredentials } from "./use-login.types";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { login } from "../../../../services/authentication-service/authentication-service/authentication.service";
import { AuthContext } from "../../contexts/authentication-context/authentication-context";

const useLogin = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });
  const { dispatch } = useContext(AuthContext);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUserCredentials((currentCredentials) => ({
      ...currentCredentials,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setIsLoading(true);
      await login({
        email: userCredentials.email,
        password: userCredentials.password,
      });
      dispatch({
        type: "LOG_IN",
        payload: {
          id: "1",
          email: "a",
          name: "b",
          username: "c",
        },
      });
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    handleOnChange,
    handleOnSubmit,
    userCredentials,
  };
};

export default useLogin;
