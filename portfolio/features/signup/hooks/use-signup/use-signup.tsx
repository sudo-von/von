import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { APIError } from "../../../../services/api-service/api.service.responses";
import { signup } from "../../../../services/authentication-service/authentication-service/authentication.service";

const useSignup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setAccount((state) => ({ ...state, [name]: value }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSuccess("");
      setError("");
      setLoading(true);
      await signup(account);
      setSuccess("Registration successful! Welcome aboard!");
    } catch (e) {
      setError((e as APIError).error);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    account,
    loading,
    success,
    handleOnSubmit,
    handleOnChange,
  };
};

export default useSignup;
