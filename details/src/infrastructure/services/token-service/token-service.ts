import {
  TokenUserDto,
} from './dtos/token-user-dto';

interface ITokenServiceReader {
  decodeToken: (token: string) => TokenUserDto;
}

interface ITokenService extends ITokenServiceReader {}

abstract class TokenService implements ITokenService {
  constructor(protected SECRET_KEY: string) {}

  abstract decodeToken: (token: string) => TokenUserDto;
}

export default TokenService;
