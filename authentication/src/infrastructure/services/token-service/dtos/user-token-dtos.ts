export type UserToken = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  profile_picture_name: string;
  iat: number;
  exp: number;
}>;

export type CreateUserToken = Omit<UserToken, 'iat' | 'exp'>;
