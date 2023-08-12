/**
 * Interface for a password service with read operations.
 * @interface
 */
export interface IPasswordServiceReader {
  /**
   * Compares the plain password with the provided password hash.
   * @param {string} plainPassword - The plain password to compare.
   * @param {string} hashedPassword - The password hash to compare against.
   * @returns {Promise<boolean>} A promise resolving to true if the passwords match.
   */
  comparePasswords: (plainPassword: string, hashedPassword: string)
  => Promise<boolean>;
}

/**
 * Interface for a password service with write operations.
 * @interface
 */
export interface IPasswordServiceWriter {
  /**
   * Hashes the provided password.
   * @param {string} password - The password to be hashed.
   * @returns {Promise<string>} A promise with the resulting password hash.
   */
  hashPassword: (password: string)
  => Promise<string>;
}

/**
 * An interface for managing passwords, combining both reader and writer capabilities.
 * @interface
 * @extends {IPasswordServiceReader}
 * @extends {IPasswordServiceWriter}
 */
interface IPasswordService extends
  IPasswordServiceReader,
  IPasswordServiceWriter {}

export default IPasswordService;
