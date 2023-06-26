type TokenUserDto = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  profile_picture: string;
  iat: number;
  exp: number;
}>;

export default TokenUserDto;
