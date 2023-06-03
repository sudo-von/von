import { CreateUserEntity } from '../domain/entities/create-user-entity';
import { UserEntity } from '../domain/entities/user-entity';
import { AbstractUserUsecase, UserUsecase } from '../domain/usecase/user-usecase';

class UserUsecaseImpl extends AbstractUserUsecase implements UserUsecase {
  getUserById = async (id: string): Promise<UserEntity> => {
    const user = await this.userRepository.getUserById(id);
    if (!user) throw new Error('user not found');
    return user;
  };

  createUser = async (userPayload: CreateUserEntity): Promise<UserEntity> => {
    const existingUser = await this.userRepository.getUserByEmail(userPayload.email);
    if (existingUser) throw new Error('email already exists');

    const hashedPassword = await this.hashService.hashSensitiveData(userPayload.password);

    const payload: CreateUserEntity = {
      ...userPayload,
      password: hashedPassword,
    };

    const createdUser = await this.userRepository.createUser(payload);

    if (!createdUser) throw new Error("user couldn't be created");
    return createdUser;
  };
}

export default UserUsecaseImpl;
