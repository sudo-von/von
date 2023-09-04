import createAPIService from "@services/api-service/api.service";
import { UserAPIResponse } from "@authentication/services/user-service/user.service.responses";

const userService = createAPIService({
  base: "user",
  port: 3000,
  version: 1,
});

export const getUserByUsername = async (username: string): Promise<UserAPIResponse> => {
  const query = `/username/${username}`;
  const { data } = await userService.get<UserAPIResponse>(query);
  return data;
};
