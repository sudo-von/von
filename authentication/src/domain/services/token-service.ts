import { SmallUserEntity } from '../entities/small-user-entity';

abstract class TokenService {
  constructor(protected secret: string) {}

  abstract generate: (payload: SmallUserEntity) => string;

  abstract verify: (token: string) => SmallUserEntity;
}

export default TokenService;
