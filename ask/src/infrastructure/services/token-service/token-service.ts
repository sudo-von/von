import {
  UserToken,
} from './dtos/user-dto/user-token-dtos';

abstract class TokenService {
  constructor(protected readonly secret: string) {}

  abstract decode: (token: string) => Promise<UserToken>;
}

export default TokenService;
