export type Token = Readonly<{
  iat: number;
  exp: number;
}>;

export type UserToken = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  profile_picture_name: string;
} & Token>;
