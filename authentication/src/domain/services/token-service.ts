import { SmallUserEntity } from '../entities/user-entity';
import LoggerService from './logger-service';

abstract class TokenService {
  constructor(
    protected secret: string,
    protected logger: LoggerService,
  ) {}

  abstract generateToken: (payload: SmallUserEntity) => string;

  abstract verifyToken: (token: string) => SmallUserEntity;
}

export default TokenService;
