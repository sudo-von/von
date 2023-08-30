import { AuthUserAPIResponse } from "./user.service.responses";
import createAPIService from "../../../../services/api-service/api.service";

const userService = createAPIService({
  base: "user",
  port: 3000,
  version: 1,
});

export const getUserByUsername = async (
  username: string
): Promise<AuthUserAPIResponse> => {
  const query = `/username/${username}`;
  const { data } = await userService.get<AuthUserAPIResponse>(query);
  return data;
};
