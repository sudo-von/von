import { type ISmallUserEntity, type ICreateUserEntity } from './user-model';
import { type IUserRepository } from './user-repository';

interface ISignupUsecase {
  userRepository: IUserRepository
}

export class SignupUsecase implements ISignupUsecase {
  constructor (public userRepository: IUserRepository) {}

  signup = async (user: ICreateUserEntity): Promise<ISmallUserEntity> => {
    if (user.password !== user.confirm_password) { throw new Error('passwords must be the same'); }

    const existingUser = await this.userRepository.findByEmail(user.email);
    if (existingUser) throw new Error('user already exists');

    const createdUser = await this.userRepository.createUser(user);

    console.log(createdUser);

    return createdUser;
  };
}
