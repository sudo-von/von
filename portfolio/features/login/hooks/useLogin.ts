import { ChangeEvent, FormEvent, useState } from "react";

export type Credentials = {
  email: string;
  password: string;
};

const useLogin = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return {
    onSubmit,
    credentials,
    onHandleChange
  }
};

export default useLogin;