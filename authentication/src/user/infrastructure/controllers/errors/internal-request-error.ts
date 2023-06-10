import AbstractRequestError from './AbstractRequestError';
import statusCodes from './status-codes';

class InternalRequest extends AbstractRequestError {
  statusCode = statusCodes.serverSide.internalServerError;

  constructor() {
    super('something went wrong, try again later...');
    Object.setPrototypeOf(this, InternalRequest.prototype);
  }
}

export default InternalRequest;
