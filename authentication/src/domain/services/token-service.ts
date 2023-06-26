import {
  RestrictedUserEntity,
} from '../entities/user-entity';

interface ITokenServiceReader {
  decodeToken: (token: string) => RestrictedUserEntity;
}

interface ITokenServiceWriter {
  generateToken: (payload: RestrictedUserEntity) => string;
}

interface ITokenService extends ITokenServiceReader, ITokenServiceWriter {}

abstract class TokenService implements ITokenService {
  constructor(protected SECRET_KEY: string) {}

  abstract decodeToken: (token: string) => RestrictedUserEntity;

  abstract generateToken: (payload: RestrictedUserEntity) => string;
}

export default TokenService;
