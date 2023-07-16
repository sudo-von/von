export type User = Readonly<{
  id: string;
  name: string;
  email: string;
  avatar?: string;
  username: string;
  password: string;
}>;

export type CreateUser = Omit<User, 'id' | 'avatar'>;

export type UpdateUser = Readonly<
Pick<User, 'password'> &
Partial<Pick<User, 'name' | 'email' | 'username'>>
>;

export type SecureUser = Omit<User, 'password'>;

export type UserCredentials = Pick<User, 'email' | 'password'>;
