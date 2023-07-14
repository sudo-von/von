export type UserToken = Readonly<{
  id: string;
  iat: number;
  exp: number;
  name: string;
  email: string;
  avatar: string;
  username: string;
}>;

export type CreateUserToken = Omit<UserToken, 'iat' | 'exp'>;
