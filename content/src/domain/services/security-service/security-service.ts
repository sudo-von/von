import {
  SupportedAlgorithms,
} from './security-service-algorithms';

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

interface ISecurityService extends ISecurityServiceWriter {}

export default ISecurityService;
