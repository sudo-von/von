import AbstractRequestError from './AbstractRequestError';
import statusCodes from './status-codes';

class UserCouldntBeCreatedRequestError extends AbstractRequestError {
  statusCode = statusCodes.serverSide.internalServerError;

  constructor() {
    super("user couldn't be created");
    Object.setPrototypeOf(this, UserCouldntBeCreatedRequestError.prototype);
  }
}

export default UserCouldntBeCreatedRequestError;
