export type User = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
}>;

export type CreateUser = Omit<User, 'id'>;

export type UpdateUserRequiredFields = Pick<User, 'password'>;

export type UpdateUserOptionalFields = Partial<Pick<User, 'name' | 'email' | 'username'>>;

export type UpdateUser = Readonly<UpdateUserRequiredFields & UpdateUserOptionalFields>;

export type SecureUser = Omit<User, 'password'>;

export type UserCredentials = Pick<User, 'email' | 'password'>;
