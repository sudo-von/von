import {
  UserToken,
} from './dtos/user-dto/user-token-dtos';
import {
  SecureUser,
} from '../../../domain/entities/user-entity/user-entities';

abstract class TokenService {
  constructor(protected readonly secret: string) {}

  abstract decode: (token: string) => Promise<UserToken>;

  abstract generate: (payload: SecureUser) => Promise<string>;
}

export default TokenService;
