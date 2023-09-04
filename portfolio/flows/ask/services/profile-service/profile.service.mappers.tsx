import { ProfileProps } from "@ask/components/profile/profile";
import { ProfileResponse } from "@ask/services/profile-service/profile.service.responses";
import { UserResponse } from "@authentication/services/user-service/user.service.responses";
import { metricsResponseToProps } from "@ask/services/metrics-service/metrics.service.mappers";

export const profileResponseToProps = (
  userResponse: UserResponse,
  profileResponse: ProfileResponse
): ProfileProps => ({
  avatar: userResponse.avatar || "/avatar/default-avatar.jpg",
  details: userResponse.details ? {
    interest: userResponse.details.interest,
    position: userResponse.details.position,
  } : null,
  metrics: metricsResponseToProps(profileResponse.metrics),
  name: userResponse.name,
  username: userResponse.username,
});
