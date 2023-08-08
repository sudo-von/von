import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import {
  UserDetailsReplacementFailedError,
} from '../../domain/entities/user-details-entity/user-details-errors';
import {
  ReplaceUserDetails,
} from '../../domain/entities/user-details-entity/user-details-entities';
import detailedUserToDetailedSecureUser from '../../domain/entities/user-entity/user-mappers';
import UserDetailsUsecase from '../../domain/usecases/user-details-usecase/user-details-usecase';
import validateUserDetailsReplacement from '../../domain/entities/user-details-entity/user-details-validations/replace-user-details-validations';

class UserDetailsUsecaseApplication extends UserDetailsUsecase {
  replaceUserDetailsByUsername = async (
    username: string,
    payload: ReplaceUserDetails,
  ): Promise<DetailedSecureUser> => {
    validateUserDetailsReplacement(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      details: {
        quote: payload.quote,
        interest: payload.interest,
        position: payload.position,
      },
    }, { username });
    if (!updatedUser) throw UserDetailsReplacementFailedError;

    const detailedSecureUser = detailedUserToDetailedSecureUser(updatedUser);
    return detailedSecureUser;
  };
}

export default UserDetailsUsecaseApplication;