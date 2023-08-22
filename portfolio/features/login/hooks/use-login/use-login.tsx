import { UserCredentials } from "./use-login.types";
import { ChangeEvent, FormEvent, useState } from "react";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { login } from "../../../../services/authentication-service/authentication-service/authentication.service";

const useLogin = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

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
      const headers = await login({
        email: userCredentials.email,
        password: userCredentials.password,
      });
      console.log(
        "🚀 ~ file: use-login.tsx:31 ~ handleOnSubmit ~ headers:",
        headers
      );
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
