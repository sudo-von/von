import { AuthenticationUser } from "@authentication/contexts/authentication-context/authentication-context.types";

export type LOG_IN_ACTION = {
  payload: AuthenticationUser;
  type: "LOG_IN";
};

export type LOG_OUT_ACTION = {
  type: "LOG_OUT";
};