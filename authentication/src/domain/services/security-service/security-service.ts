import {
  SupportedAlgorithms,
} from './security-service-algorithms';

/**
* An interface for hashing data using specified algorithms.
* @interface
*/
interface ISecurityServiceWriter {
  /**
  * Generates a random hash using the specified algorithm.
  * @param {SupportedAlgorithms} algorithm - The algorithm to use for hashing.
  * @returns {string} The generated random hash.
  */
  generateRandomHash: (algorithm: SupportedAlgorithms)
  => string;

  /**
  * Hashes the provided data using the specified algorithm.
  * @param {string} data - The data to be hashed.
  * @param {SupportedAlgorithms} algorithm - The algorithm to use for hashing.
  * @returns {string} The resulting hash.
  */
  generateHash: (data: string, algorithm: SupportedAlgorithms)
  => string;
}

/**
* An interface for security services that extends the writing capabilities.
* @interface
* @extends {ISecurityServiceWriter}
*/
interface ISecurityService extends ISecurityServiceWriter {}

export default ISecurityService;
