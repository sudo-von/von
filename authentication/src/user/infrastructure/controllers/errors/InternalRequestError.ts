import AbstractRequestError from './AbstractRequestError';
import statusCodes from './status-codes';

class InternalRequestError extends AbstractRequestError {
  statusCode = statusCodes.serverSide.internalServerError;

  constructor() {
    super('something went wrong, try again later...');
    Object.setPrototypeOf(this, InternalRequestError.prototype);
  }
}

export default InternalRequestError;
