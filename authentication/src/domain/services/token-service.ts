import { SmallUserEntity } from '../entities/user-entity';

abstract class TokenService {
  constructor(protected SECRET_KEY: string) {}

  abstract decodeToken: (token: string) => SmallUserEntity;

  abstract generateToken: (payload: SmallUserEntity) => string;
}

export default TokenService;
