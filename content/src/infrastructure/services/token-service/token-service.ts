import {
  UserToken,
} from './dtos/user-dto/user-token-dtos';

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
}

export default TokenService;
