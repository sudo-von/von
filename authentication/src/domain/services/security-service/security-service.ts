import {
  SupportedAlgorithms,
} from './security-service-algorithms';

/**
* An interface for hashing plain data using specified algorithms.
* @interface
*/
interface ISecurityServiceWriter {
  /**
  * Hashes the provided plain data using the specified algorithm.
  * @param {string} plainData - The plain data to be hashed.
  * @param {SupportedAlgorithms} algorithm - The algorithm to use for hashing.
  * @returns {string} The resulting hash.
  */
  hashData: (plainData: string, algorithm: SupportedAlgorithms)
  => string;
}

/**
* An interface for security services that extends the writing capabilities.
* @interface
*/
interface ISecurityService extends ISecurityServiceWriter {}

export default ISecurityService;
