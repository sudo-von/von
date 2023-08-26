import { UserResponse } from "./ask-user.service.responses";
import { ProfileProps } from "../../../features/home/components/profile/profile";

export const userResponseToProfileProps = (
  userResponse: UserResponse
): ProfileProps => ({
  name: userResponse.name,
  details: userResponse.details && {
    quote: userResponse.details.quote,
    interest: userResponse.details.interest,
    position: userResponse.details.position,
  },
});
