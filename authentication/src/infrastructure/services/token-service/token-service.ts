import {
  UserToken,
} from './dtos/user-token-dtos';
import {
  RestrictedUser,
} from '../../../domain/entities/user/user-entities';
import LoggerService from '../logger-service/logger-service';

abstract class TokenService {
  constructor(
    protected readonly SECRET_KEY: string,
    protected readonly loggerService: LoggerService,
  ) {}

  abstract decodeToken: (token: string) => UserToken;

  abstract generateToken: (payload: RestrictedUser) => string;
}

export default TokenService;
