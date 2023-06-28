import {
  TokenUserDto,
} from './dtos/token-user-dto';
import {
  RestrictedUserEntity,
} from '../../../domain/entities/user-entity';

interface ITokenServiceReader {
  decodeToken: (token: string) => TokenUserDto;
}

interface ITokenServiceWriter {
  generateToken: (payload: RestrictedUserEntity) => string;
}

interface ITokenService extends ITokenServiceReader, ITokenServiceWriter {}

abstract class TokenService implements ITokenService {
  constructor(protected SECRET_KEY: string) {}

  abstract decodeToken: (token: string) => TokenUserDto;

  abstract generateToken: (payload: RestrictedUserEntity) => string;
}

export default TokenService;
