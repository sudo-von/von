export type UserEntity = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  profilePicture: string;
}>;

export type CreateUserEntity = Omit<UserEntity, 'id'>;

export type UpdateUserEntity = Omit<UserEntity, 'id'>;

export type RestrictedUserEntity = Omit<UserEntity, 'password'>;