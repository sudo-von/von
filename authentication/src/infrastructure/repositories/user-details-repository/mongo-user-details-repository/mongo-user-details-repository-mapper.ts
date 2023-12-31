import {
  UserDetails,
} from '../../../../domain/entities/user-details-entity/user-details-entities';
import {
  PartialUserDetailsRepositorySchema,
} from '../../../../domain/repositories/user-details-repository/user-details-repository-schema';

const userDetailskDocumentToUserDetails = (
  document: PartialUserDetailsRepositorySchema,
): UserDetails => ({
  interest: document.interest,
  position: document.position,
  quote: document.quote,
});

export default userDetailskDocumentToUserDetails;
