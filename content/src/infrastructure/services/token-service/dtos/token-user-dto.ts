export type TokenUserDto = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  profile_picture: string;
  iat: number;
  exp: number;
}>;
