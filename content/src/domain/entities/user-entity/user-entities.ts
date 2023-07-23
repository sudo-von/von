export type User = Readonly<{
  id: string;
  userId: string;
  username: string;
}>;

export type CreateUser = Omit<User, 'id'>;

export type UpdateUser = Pick<User, 'username'>;

export type PartialUser = Partial<User>;
