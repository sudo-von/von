import { UserAPIResponse } from "./user.service.response";
import createAPIService from "../../api-service/api.service";

const userService = createAPIService({ base: "user", port: 3000, version: 1 });

export const getUserByUsername = async (
  username: string
): Promise<UserAPIResponse> => {
  const { data } = await userService.get<UserAPIResponse>(`/username/${username}`);
  return data;
};
