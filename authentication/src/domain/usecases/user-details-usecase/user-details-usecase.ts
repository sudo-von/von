import {
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import {
  ReplaceUserDetails,
} from '../../entities/user-details-entity/user-details-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';

abstract class UserDetailsUsecase {
  constructor(protected readonly userRepository: IUserRepository) {}

  abstract replaceUserDetailsByUsername: (username: string, payload: ReplaceUserDetails)
  => Promise<DetailedSecureUser>;
}

export default UserDetailsUsecase;
