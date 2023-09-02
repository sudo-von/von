import { AuthenticationUser } from "@authentication/contexts/authentication-context/authentication-context.types";

export type LOG_IN_ACTION = {
  type: "LOG_IN";
  payload: AuthenticationUser;
};

export type LOG_OUT_ACTION = {
  type: "LOG_OUT";
};