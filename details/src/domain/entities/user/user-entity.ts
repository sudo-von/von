export type Username = string;

export type UserEntity = Readonly<{
  id: string;
  userId: string;
  username: Username;
}>;

export type CreateUserEntity = Omit<UserEntity, 'id'>;

export type UpdateUserEntity = Omit<UserEntity, 'id'>;
