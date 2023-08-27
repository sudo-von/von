import createAPIService from "../../../api-service/api.service";
import { AuthUserAPIResponse } from "./auth-user.service.responses";

const authUserService = createAPIService({
  base: "user",
  port: 3000,
  version: 1,
});

export const getAuthUserByUsername = async (
  username: string
): Promise<AuthUserAPIResponse> => {
  const query = `/username/${username}`;
  const { data } = await authUserService.get<AuthUserAPIResponse>(query);
  return data;
};
