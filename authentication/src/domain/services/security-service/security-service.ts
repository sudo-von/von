import {
  Algorithms,
} from './security-service-algorithms';

/**
 * An interface for a security service with write operations.
 * @interface
 */
interface ISecurityServiceWriter {
  /**
   * Generates a random hash using the specified algorithm.
   * @param {Algorithms} algorithm - The algorithm to use for hashing.
   * @returns {string} The generated random hash.
   */
  generateRandomHash: (algorithm: Algorithms)
  => string;

  /**
   * Hashes the provided data using the specified algorithm.
   * @param {string} data - The data to be hashed.
   * @param {Algorithms} algorithm - The algorithm to use for hashing.
   * @returns {string} The resulting hash.
   */
  generateDataHash: (data: string, algorithm: Algorithms)
  => string;
}

/**
 * An interface for security services that extends the writing capabilities.
 * @interface
 * @extends {ISecurityServiceWriter}
 */
interface ISecurityService extends ISecurityServiceWriter {}

export default ISecurityService;
