import { Dispatch } from "react";
import { AuthenticationUser } from "../../contexts/authentication-context/authentication-context.types";

type LOG_IN_ACTION = {
  type: "LOG_IN";
  payload: AuthenticationUser;
};

type LOG_OUT_ACTION = {
  type: "LOG_OUT";
};

export type AuthenticationAction = LOG_IN_ACTION | LOG_OUT_ACTION;

export type AuthenticationDispatch = Dispatch<AuthenticationAction>;
