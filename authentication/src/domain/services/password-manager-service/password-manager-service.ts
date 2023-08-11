/**
* An interface for hashing and comparing passwords.
* @interface
*/
interface IPasswordManagerServiceWriter {
  /**
  * Hashes the provided password.
  * @param {string} password - The password to be hashed.
  * @returns {Promise<string>} A promise with the resulting password hash.
  */
  hashPassword: (password: string)
  => Promise<string>;

  /**
  * Compares the plain password with the provided password hash.
  * @param {string} plainPassword - The plain password to compare.
  * @param {string} hashedPassword - The password hash to compare against.
  * @returns {Promise<boolean>} A promise resolving to true if the passwords match, otherwise false.
  */
  comparePasswords: (plainPassword: string, hashedPassword: string)
  => Promise<boolean>;
}

/**
* An interface for managing passwords that extends the writing capabilities.
* @interface
* @extends {IPasswordManagerServiceWriter}
*/
interface IPasswordManagerService extends IPasswordManagerServiceWriter {}

export default IPasswordManagerService;
