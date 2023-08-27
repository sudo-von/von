import createAPIService from "../../api-service/api.service";
import {
  AuthAccountRequest,
  AuthCredentialsRequest,
} from "./auth.service.requests";
import { AuthUserAPIResponse } from "./user-service/auth-user.service.responses";

const authService = createAPIService({
  base: "authentication",
  port: 3000,
  version: 1,
});

export const authLogin = async (
  credentials: AuthCredentialsRequest
): Promise<string> => {
  const { headers } = await authService.post("login", credentials);
  const { authorization } = headers;
  return authorization;
};

export const authSignup = async (
  account: AuthAccountRequest
): Promise<AuthUserAPIResponse> => {
  const { data } = await authService.post<AuthUserAPIResponse>("signup", account);
  return data;
};
