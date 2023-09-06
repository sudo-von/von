import { ProfileProps } from "@ask/components/profile/profile";
import { ProfileResponse } from "@ask/services/profile-service/profile.service.responses";
import { toDetailsProps } from "@ask/components/profile/components/details/details.mappers";
import { UserResponse } from "@authentication/services/user-service/user.service.responses";
import { toMetricsProps } from "@ask/components/profile/components//metrics/metrics.mappers";

export const toProfileProps = (userResponse: UserResponse, profileResponse: ProfileResponse): ProfileProps => ({
  avatar: userResponse.avatar || "/avatar/default-avatar.jpg",
  details: userResponse.details && toDetailsProps(userResponse.details),
  metrics: toMetricsProps(profileResponse.metrics),
  name: userResponse.name,
  username: userResponse.username,
});
