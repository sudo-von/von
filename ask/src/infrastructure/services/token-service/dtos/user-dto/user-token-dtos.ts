export type UserToken = Readonly<{
  id: string;
  iat: number;
  exp: number;
  username: string;
}>;
