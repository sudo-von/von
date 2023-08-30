import { ProfileAPIResponse } from "./profile.service.responses";
import createAPIService from "../../../../services/api-service/api.service";

const profileService = createAPIService({
  base: "user",
  port: 3001,
  version: 1,
});

export const getProfileByUsername = async (username: string): Promise<ProfileAPIResponse> => {
  const { data } = await profileService.get<ProfileAPIResponse>(username);
  return data;
};
