import createAPIService from "@services/api-service/api.service";
import { ProfileAPIResponse } from "@ask/services/profile-service/profile.service.responses";

const profileService = createAPIService({
  base: "user",
  port: 3001,
  version: 1,
});

export const getProfileByUsername = async (username: string): Promise<ProfileAPIResponse> => {
  const { data } = await profileService.get<ProfileAPIResponse>(username);
  return data;
};
