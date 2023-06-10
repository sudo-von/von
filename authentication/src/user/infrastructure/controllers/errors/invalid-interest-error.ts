import { MIN_INTEREST_LENGTH, MAX_INTEREST_LENGTH } from '../../constants';

class InvalidInterest extends Error {
  constructor() {
    super(`interest must contain ${MIN_INTEREST_LENGTH} to ${MAX_INTEREST_LENGTH} characters`);
    Object.setPrototypeOf(this, InvalidInterest.prototype);
  }
}

export default InvalidInterest;
