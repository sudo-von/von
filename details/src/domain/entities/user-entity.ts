export type UserEntity = Readonly<{
  id: string;
  userId: string;
  username: string;
}>;

export type CreateUserEntity = Omit<UserEntity, 'id'>;

export type UpdateUserEntity = Omit<UserEntity, 'id'>;
