import createAPIService from "@services/api-service/api.service";
import {
  AuthAccountRequest,
  AuthCredentialsRequest,
} from "./authentication.service.requests";
import { UserAPIResponse } from "../user-service/user.service.responses";

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
): Promise<UserAPIResponse> => {
  const { data } = await authService.post<UserAPIResponse>("signup", account);
  return data;
};
