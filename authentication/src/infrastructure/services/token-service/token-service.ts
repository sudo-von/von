import {
  TokenExpiration,
} from './dtos/token-dto/token-dtos';
import {
  UserToken,
} from './dtos/user-dto/user-token-dtos';
import {
  SecureUser,
} from '../../../domain/entities/user-entity/user-entities';

abstract class TokenService {
  /**
  * Creates an instance of TokenService.
  * @param {string} secret - The secret key used to sign the token.
  */
  constructor(protected readonly secret: string) {}

  /**
  * Decodes a token and returns a UserToken object.
  * @param {string} token - The token to decode.
  * @returns {Promise<UserToken>} A promise with the UserToken.
  */
  abstract decode: (token: string)
  => Promise<UserToken>;

  /**
  * Generates a token from a SecureUser object.
  * @param {SecureUser} payload - The SecureUser object to use as payload.
  * @param {TokenExpiration} expiration - The expiration time for the token.
  * @returns {Promise<string>} A promise with the token.
  */
  abstract generate: (payload: SecureUser, expiration: TokenExpiration)
  => Promise<string>;
}

export default TokenService;
