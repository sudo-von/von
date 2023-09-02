import { AuthenticationDispatch } from "@authentication/reducers/authentication-reducer/authentication-reducer.types";

export type AuthenticationContext = {
  state: AuthenticationState;
  dispatch: AuthenticationDispatch;
};

export type AuthenticationState = {
  isLoggedIn: boolean;
  user: AuthenticationUser | null;
};

export type AuthenticationUser = {
  id: string;
  name: string;
  email: string;
  username: string;
};