import createAPIService from "@services/api-service/api.service";
import { UserAPIResponse } from "@authentication/services/user-service/user.service.responses";
import { AccountRequest, CredentialsRequest } from "@authentication/services/authentication-service/authentication.service.requests";

const authenticationService = createAPIService({
  base: "authentication",
  port: 3000,
  version: 1,
});

export const login = async (
  credentials: CredentialsRequest
): Promise<string> => {
  const { headers } = await authenticationService.post("login", credentials);
  const { authorization } = headers;
  return authorization;
};

export const signup = async (
  account: AccountRequest
): Promise<UserAPIResponse> => {
  const { data } = await authenticationService.post<UserAPIResponse>("signup", account);
  return data;
};
