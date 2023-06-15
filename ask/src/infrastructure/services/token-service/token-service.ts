export type User = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  profile_picture: string;
}>;

export type DecodedToken = Readonly<User & {
  iat: number;
  exp: number;
}>;

abstract class TokenService {
  constructor(protected secret: string) {}

  abstract decodeToken: (token: string) => User;
}

export default TokenService;
