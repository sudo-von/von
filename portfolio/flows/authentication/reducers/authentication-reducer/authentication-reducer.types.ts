import { Dispatch } from "react";
import { LOG_IN_ACTION, LOG_OUT_ACTION } from "@authentication/reducers/authentication-reducer/authentication-reducer.actions";

export type AuthenticationAction = LOG_IN_ACTION | LOG_OUT_ACTION;

export type AuthenticationDispatch = Dispatch<AuthenticationAction>;
