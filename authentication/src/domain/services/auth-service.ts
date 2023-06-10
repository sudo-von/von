import { SmallUserEntity } from '../entities/small-user-entity';

abstract class AbstractAuthService {
  constructor(protected secret: string) {}

  abstract generateToken: (payload: SmallUserEntity) => string;

  abstract verifyToken: (token: string) => SmallUserEntity;
}

export default AbstractAuthService;
