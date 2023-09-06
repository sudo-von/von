import { DetailsProps } from "@ask/components/profile/components/details/details";
import { UserDetailsResponse } from "@authentication/services/user-details-service/user-details.service.responses";

export const toDetailsProps = (detailsResponse: UserDetailsResponse): DetailsProps => ({
  interest: detailsResponse.interest,
  position: detailsResponse.position,
});
