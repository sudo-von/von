import { UserModel, userModelToUserEntity } from './user-schema';
import IUserRepository from '../../../../domain/repositories/user-repository';
import { CreateUserEntity, UpdateUserEntity, UserEntity } from '../../../../domain/entities/user-entity';

class MongoUserRepository implements IUserRepository {
  getUsers = async (): Promise<UserEntity[]> => {
    const userModels = await UserModel.find();
    const userEntities = userModels.map((model) => userModelToUserEntity(model));
    return userEntities;
  };

  getUserById = async (id: string): Promise<UserEntity | null> => {
    const userModel = await UserModel.findById(id);
    if (!userModel) return null;
    const userEntity = userModelToUserEntity(userModel);
    return userEntity;
  };

  getUserByEmail = async (email: string): Promise<UserEntity | null> => {
    const userModel = await UserModel.findOne({ email });
    if (!userModel) return null;
    const userEntity = userModelToUserEntity(userModel);
    return userEntity;
  };

  getUserByUsername = async (username: string): Promise<UserEntity | null> => {
    const userModel = await UserModel.findOne({ username });
    if (!userModel) return null;
    const userEntity = userModelToUserEntity(userModel);
    return userEntity;
  };

  createUser = async (payload: CreateUserEntity): Promise<UserEntity | null> => {
    const userModel = new UserModel({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password,
      profilePicture: payload.profilePicture,
      about: {
        interest: payload.about.interest,
        position: payload.about.position,
        quote: payload.about.quote,
      },
    });
    const storedUser = await userModel.save();
    const userEntity = userModelToUserEntity(storedUser);
    return userEntity;
  };

  updateUserById = async (id: string, payload: UpdateUserEntity): Promise<UserEntity | null> => {
    const updatedUser = await UserModel.findByIdAndUpdate(id, {
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password,
      profilePicture: payload.profilePicture,
      about: {
        interest: payload.about.interest,
        position: payload.about.position,
        quote: payload.about.quote,
      },
    });
    if (!updatedUser) return null;
    const userEntity = userModelToUserEntity(updatedUser);
    return userEntity;
  };
}

export default MongoUserRepository;
