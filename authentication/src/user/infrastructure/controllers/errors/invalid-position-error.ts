import { MIN_POSITION_LENGTH, MAX_POSITION_LENGTH } from '../../constants';

class InvalidPosition extends Error {
  constructor() {
    super(`position must contain ${MIN_POSITION_LENGTH} to ${MAX_POSITION_LENGTH} characters`);
    Object.setPrototypeOf(this, InvalidPosition.prototype);
  }
}

export default InvalidPosition;
