import { MIN_QUOTE_LENGTH, MAX_QUOTE_LENGTH } from '../../constants';

class InvalidQuote extends Error {
  constructor() {
    super(`quote must contain ${MIN_QUOTE_LENGTH} to ${MAX_QUOTE_LENGTH} characters`);
    Object.setPrototypeOf(this, InvalidQuote.prototype);
  }
}

export default InvalidQuote;
