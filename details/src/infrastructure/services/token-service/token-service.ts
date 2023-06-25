import TokenUserDto from './dtos/token-user-dto';

abstract class TokenService {
  constructor(protected SECRET_KEY: string) {}

  abstract decodeToken: (token: string) => TokenUserDto;
}

export default TokenService;
