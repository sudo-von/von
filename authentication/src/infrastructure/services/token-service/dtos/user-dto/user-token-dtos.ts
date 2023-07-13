export type UserToken = Readonly<{
  id: string;
  iat: number;
  exp: number;
  name: string;
  email: string;
  username: string;
  profile_picture_name: string;
}>;

export type CreateUserToken = Omit<UserToken, 'iat' | 'exp'>;
