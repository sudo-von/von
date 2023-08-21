import { UserCredentials } from "./use-login.types";
import { ChangeEvent, FormEvent, useState } from "react";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { login } from "../../../../services/authentication-service/authentication-service/authentication.service";

const useLogin = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCredentials((currentCredentials) => ({
      ...currentCredentials,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true);
      await login({
        email: credentials.email,
        password: credentials.password,
      });
    } catch (e) {
      setError((e as APIError).error)
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    credentials,
    handleOnChange,
    handleOnSubmit,
  };
};

export default useLogin;
