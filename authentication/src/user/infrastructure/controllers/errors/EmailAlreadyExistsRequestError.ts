import AbstractRequestError from './AbstractRequestError';
import statusCodes from './status-codes';

class EmailAlreadyExistsRequestError extends AbstractRequestError {
  statusCode = statusCodes.clientSide.conflict;

  constructor() {
    super('email already exists...');
    Object.setPrototypeOf(this, EmailAlreadyExistsRequestError.prototype);
  }
}

export default EmailAlreadyExistsRequestError;
