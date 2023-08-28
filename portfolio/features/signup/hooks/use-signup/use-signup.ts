import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { authSignup } from "../../../../services/api-service/auth-service/auth.service";
import { Account } from "./use-signup.types";
import { APIError } from "../../../../services/api-service/api.service.responses";

const useSignup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState<Account>({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const { push } = useRouter();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount((state) => ({ ...state, [name]: value }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await authSignup(account);
      push("/ask");
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
    handleOnSubmit,
    handleOnChange,
  };
};

export default useSignup;
