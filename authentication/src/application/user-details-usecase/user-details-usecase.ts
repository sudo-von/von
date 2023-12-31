import {
  NoUserCreatedYetError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  UserDetailsCreateFailedError,
  UserDetailsReplaceFailedError,
} from '../../domain/entities/user-details-entity/user-details-errors';
import {
  ReplacePartialUserDetails,
} from '../../domain/entities/user-details-entity/user-details-entities';
import detailedToSecureUser from '../../domain/entities/user-entity/user-mappers';
import UserDetailsUsecase from '../../domain/usecases/user-details-usecase/user-details-usecase';
import validatePartialUserDetailsReplacement from '../../domain/entities/user-details-entity/user-details-validations/replace-partial-user-details-validations';

class UserDetailsUsecaseApplication extends UserDetailsUsecase {
  replacePartialUserDetails = async (
    payload: ReplacePartialUserDetails,
  ): Promise<DetailedSecureUser> => {
    const replacePartialUserDetails: ReplacePartialUserDetails = {};

    if (payload.quote !== undefined && payload.quote !== null) replacePartialUserDetails.quote = payload.quote.trim();
    if (payload.interest !== undefined && payload.interest !== null) replacePartialUserDetails.interest = payload.interest.trim();
    if (payload.position !== undefined && payload.position !== null) replacePartialUserDetails.position = payload.position.trim();

    validatePartialUserDetailsReplacement(replacePartialUserDetails);

    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    const updatedUser = await this.userRepository.updateUser({
      details: replacePartialUserDetails,
    });
    if (!updatedUser) throw user.details ? UserDetailsReplaceFailedError : UserDetailsCreateFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };
}

export default UserDetailsUsecaseApplication;
