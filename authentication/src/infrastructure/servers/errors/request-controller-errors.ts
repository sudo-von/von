import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';

export const AuthorizationSchemeNotSupportedControllerError = createControllerErrorFactory({
  code: 'AUTHORIZATION_SCHEME_NOT_SUPPORTED',
  message: 'Authorization scheme not supported.',
  statusCode: statusCode.clientSide.unauthorized,
});

export const InternalServerControllerError = createControllerErrorFactory({
  code: 'INTERNAL_SERVER',
  message: 'An internal server error occurred. Please try again later.',
  statusCode: statusCode.serverSide.internalServer,
});

export const InvalidFileParameterControllerError = createControllerErrorFactory({
  code: 'INVALID_FILE_PARAMETER_NAME',
  message: 'The specified parameter for uploading a file is incorrect or empty.',
  statusCode: statusCode.clientSide.badRequest,
});

export const MissingAuthorizationHeaderControllerError = createControllerErrorFactory({
  code: 'MISSING_AUTHORIZATION_HEADER',
  message: 'Missing authorization header.',
  statusCode: statusCode.clientSide.unauthorized,
});

export const MissingTokenControllerError = createControllerErrorFactory({
  code: 'AUTHORIZATION_SCHEME_NOT_SUPPORTED',
  message: 'Missing token.',
  statusCode: statusCode.clientSide.unauthorized,
});
