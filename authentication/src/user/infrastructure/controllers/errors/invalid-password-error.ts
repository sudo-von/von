import { MIN_PASSWORD_LENGTH } from '../../constants';

class InvalidPassword extends Error {
  constructor() {
    super(`password must contain at least ${MIN_PASSWORD_LENGTH} characters`);
    Object.setPrototypeOf(this, InvalidPassword.prototype);
  }
}

export default InvalidPassword;
