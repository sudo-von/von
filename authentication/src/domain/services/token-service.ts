import { SmallUserEntity } from '../entities/user-entity';

abstract class TokenService {
  constructor(protected secret: string) {}

  abstract generate: (payload: SmallUserEntity) => string;

  abstract verify: (token: string) => SmallUserEntity;
}

export default TokenService;
