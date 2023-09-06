import { AuthenticationDispatch } from "@authentication/reducers/authentication-reducer/authentication-reducer.types";

export type AuthenticationContext = {
  dispatch: AuthenticationDispatch;
  state: AuthenticationState;
};

export type AuthenticationState = {
  isLoggedIn: boolean;
  user: AuthenticationUser | null;
};

export type AuthenticationUser = {
  email: string;
  id: string;
  name: string;
  username: string;
};