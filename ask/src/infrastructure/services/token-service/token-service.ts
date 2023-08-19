import {
  UserToken,
} from './entities/user-token-entity/user-token-entities';

/**
 * Abstract class representing a service for token management.
 * @abstract
 */
abstract class TokenService {
  /**
   * Creates an instance of TokenService.
   * @constructor
   * @param {string} secret - The secret key used to sign the token.
   */
  constructor(protected readonly secret: string) {}

  /**
   * Gets the secret key as a Uint8Array.
   * @returns {Uint8Array} The secret key as a Uint8Array.
   */
  abstract getSecretKey: ()
  => Uint8Array;

  /**
   * Decodes a token to retrieve user information.
   * @param {string} token - The token to decode.
   * @returns {Promise<UserToken>} A promise with the decoded user token.
   */
  abstract decodeToken: (token: string)
  => Promise<UserToken>;
}

export default TokenService;
