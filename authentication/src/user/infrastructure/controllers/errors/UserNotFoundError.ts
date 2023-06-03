import AbstractRequestError from './AbstractRequestError';
import statusCodes from './status-codes';

class UserNotFoundRequestError extends AbstractRequestError {
  statusCode = statusCodes.clientSide.notFound;

  constructor() {
    super('user not found');
    Object.setPrototypeOf(this, UserNotFoundRequestError.prototype);
  }
}

export default UserNotFoundRequestError;
