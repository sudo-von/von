import { MIN_NAME_LENGTH, MAX_NAME_LENGTH } from '../../constants';
import AbstractRequestError from './AbstractRequestError';

class InvalidNameRequest extends AbstractRequestError {
  constructor() {
    super(`name field must contain ${MIN_NAME_LENGTH} to ${MAX_NAME_LENGTH} characters`);
    Object.setPrototypeOf(this, InvalidNameRequest.prototype);
  }
}

export default InvalidNameRequest;
