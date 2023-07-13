import {
  UserToken,
} from './dtos/user-dto/user-token-dtos';
import {
  RestrictedUser,
} from '../../../domain/entities/user/user-entities';

abstract class TokenService {
  constructor(protected readonly secret: string) {}

  abstract decode: (token: string) => Promise<UserToken>;

  abstract generate: (payload: RestrictedUser) => Promise<string>;
}

export default TokenService;
