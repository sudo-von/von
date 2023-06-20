import { EssentialUserEntity } from '../entities/user-entity';

abstract class TokenService {
  constructor(protected SECRET_KEY: string) {}

  abstract decodeToken: (token: string) => EssentialUserEntity;

  abstract generateToken: (payload: EssentialUserEntity) => string;
}

export default TokenService;
