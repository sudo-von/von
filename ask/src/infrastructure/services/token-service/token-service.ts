import {
  UserToken,
} from './dtos/user-token-dtos';
import LoggerService from '../logger-service/logger-service';

abstract class TokenService {
  constructor(
    protected readonly SECRET_KEY: string,
    protected readonly loggerService: LoggerService,
  ) {}

  abstract decodeToken: (token: string) => Promise<UserToken>;
}

export default TokenService;
