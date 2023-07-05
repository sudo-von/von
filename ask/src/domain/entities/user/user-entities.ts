export type User = Readonly<{
  id: string;
  userId: string;
  username: string;
}>;

export type UserPayload = Omit<User, 'id'>;

export type CreateUser = UserPayload;

export type UpdateUser = UserPayload;
