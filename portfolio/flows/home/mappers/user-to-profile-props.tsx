import { ProfileProps } from "../components/profile/profile";
import { AuthUserResponse } from "../../authentication/services/user-service/user.service.responses";

export const userToProfileProps = (user: AuthUserResponse): ProfileProps => ({
  name: user.name,
  details: user.details
    ? {
        quote: user.details.quote,
        interest: user.details.interest,
        position: user.details.position,
      }
    : null,
});
