import {
  UserToken,
} from './dtos/user/user-token-dtos';
import LoggerService from '../logger-service/logger-service';

abstract class TokenService {
  constructor(
    protected readonly secret: string,
    protected readonly loggerService: LoggerService,
  ) {}

  abstract decode: (token: string) => Promise<UserToken>;
}

export default TokenService;
