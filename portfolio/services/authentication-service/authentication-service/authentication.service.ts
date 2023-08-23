import createAPIService from "../../api-service/api.service";
import { setToken } from "../../token-service/token.service";
import { UserCredentialsRequest } from "./authentication.service.requests";

const authenticationService = createAPIService({
  base: "authentication",
  port: 3000,
  version: 1,
});

export const login = async (userCredentials: UserCredentialsRequest): Promise<void> => {
  const { headers } = await authenticationService.post('login', userCredentials);

  const { authorization } = headers;
  if (authorization) setToken(authorization);
};
