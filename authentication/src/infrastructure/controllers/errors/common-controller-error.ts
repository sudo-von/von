import {
  ControllerError,
} from './controller-error-codes';
import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import {
  PERMISSION_DENIED,
  INVALID_CREDENTIALS,
} from '../../../domain/errors/common-error';

export const INTERNAL_SERVER_CONTROLLER: ControllerError = {
  code: 'INTERNAL_SERVER_CONTROLLER_ERROR',
  message: 'An internal server error occurred. Please try again later.',
  statusCode: statusCode.serverSide.internalServer,
};

export const INVALID_CREDENTIALS_CONTROLLER: ControllerError = {
  code: 'INVALID_CREDENTIALS_CONTROLLER_ERROR',
  message: INVALID_CREDENTIALS.message,
  statusCode: statusCode.clientSide.unauthorized,
};

export const PERMISSION_DENIED_CONTROLLER: ControllerError = {
  code: 'PERMISSION_DENIED_CONTROLLER_ERROR',
  message: PERMISSION_DENIED.message,
  statusCode: statusCode.clientSide.forbidden,
};

export const InternalServerControllerError = createControllerErrorFactory(
  INTERNAL_SERVER_CONTROLLER,
);

export const InvalidCredentialsControllerError = createControllerErrorFactory(
  INVALID_CREDENTIALS_CONTROLLER,
);

export const PermissionDeniedControllerError = createControllerErrorFactory(
  PERMISSION_DENIED_CONTROLLER,
);
