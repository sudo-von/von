import { SmallUserEntity } from '../entities/user-entity';

abstract class TokenService {
  constructor(
    protected secret: string,
  ) {}

  abstract generateToken: (payload: SmallUserEntity) => string;

  abstract decodeToken: (token: string) => SmallUserEntity;
}

export default TokenService;
