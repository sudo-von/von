import { RestrictedUserEntity } from '../entities/user-entity';

abstract class TokenService {
  constructor(protected SECRET_KEY: string) {}

  abstract decodeToken: (token: string) => RestrictedUserEntity;

  abstract generateToken: (payload: RestrictedUserEntity) => string;
}

export default TokenService;
