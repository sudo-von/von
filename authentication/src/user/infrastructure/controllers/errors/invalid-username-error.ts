import { MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH } from '../../constants';

class InvalidUsername extends Error {
  constructor() {
    super(`username field must contain ${MIN_USERNAME_LENGTH} to ${MAX_USERNAME_LENGTH} characters`);
    Object.setPrototypeOf(this, InvalidUsername.prototype);
  }
}

export default InvalidUsername;
