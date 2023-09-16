import {
  NoUserCreatedYetError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  UserDetailsReplaceFailedError,
} from '../../domain/entities/user-details-entity/user-details-errors';
import {
  ReplaceUserDetails,
} from '../../domain/entities/user-details-entity/user-details-entities';
import detailedToSecureUser from '../../domain/entities/user-entity/user-mappers';
import UserDetailsUsecase from '../../domain/usecases/user-details-usecase/user-details-usecase';
import validateUserDetailsReplacement from '../../domain/entities/user-details-entity/user-details-validations/replace-user-details-validations';

class UserDetailsUsecaseApplication extends UserDetailsUsecase {
  replaceUserDetails = async (
    payload: ReplaceUserDetails,
  ): Promise<DetailedSecureUser> => {
    validateUserDetailsReplacement(payload);

    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    const updatedUser = await this.userRepository.updateUser({
      details: {
        quote: payload.quote,
        interest: payload.interest,
        position: payload.position,
      },
    });
    if (!updatedUser) throw UserDetailsReplaceFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };
}

export default UserDetailsUsecaseApplication;
