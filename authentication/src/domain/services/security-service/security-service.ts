import {
  Algorithms,
} from './security-service-algorithms';

/**
 * Interface for a security service with write operations.
 * @interface
 */
interface ISecurityServiceWriter {
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
 * Interface for security services that extends the writing capabilities.
 * @interface
 * @extends {ISecurityServiceWriter}
 */
interface ISecurityService extends ISecurityServiceWriter {}

export default ISecurityService;
