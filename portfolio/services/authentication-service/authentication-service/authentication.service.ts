import createAPIService from "../../api-service/api.service";
import { UserCredentialsRequest } from "./authentication.service.requests";

const authenticationService = createAPIService({
  base: "authentication",
  port: 3000,
  version: 1,
});

export const login = async (userCredentials: UserCredentialsRequest): Promise<string> => {
  const { headers } = await authenticationService.post('login', userCredentials);
  const { authorization } = headers;
  return authorization;
};
