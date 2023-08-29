import { AuthenticationDispatch } from "../../reducers/authentication-reducer/authentication-reducer.types";

export type AuthenticationUser = {
  id: string;
  name: string;
  email: string;
  username: string;
};

export type AuthenticationState = {
  isLoggedIn: boolean;
  user: AuthenticationUser | null;
};

export type AuthenticationContext = {
  state: AuthenticationState;
  dispatch: AuthenticationDispatch;
};
