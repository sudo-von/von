import { ChangeEvent, FormEvent, useState } from "react";

export type User = {
  name: string;
  email: string;
  username: string;
  password: string;
};

const useSignup = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((currentUser) => ({ ...currentUser, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return {
    user,
    onSubmit,
    onHandleChange
  }
};

export default useSignup;