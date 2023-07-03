import {
  ControllerError,
} from './controller-error-codes';
import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import { InvalidCredentialsError, UserPermissionDeniedError } from '../../../domain/entities/user/user-errors';

export const INTERNAL_SERVER_CONTROLLER: ControllerError = {
  code: 'INTERNAL_SERVER_CONTROLLER_ERROR',
  message: 'An internal server error occurred. Please try again later.',
  statusCode: statusCode.serverSide.internalServer,
};

export const INVALID_CREDENTIALS_CONTROLLER: ControllerError = {
  code: 'INVALID_CREDENTIALS_CONTROLLER_ERROR',
  message: InvalidCredentialsError.message,
  statusCode: statusCode.clientSide.unauthorized,
};

export const PERMISSION_DENIED_CONTROLLER: ControllerError = {
  code: 'PERMISSION_DENIED_CONTROLLER_ERROR',
  message: UserPermissionDeniedError.message,
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

export const InvalidFileParameterControllerError = createControllerErrorFactory({
  code: 'INVALID_FILE_PARAMETER_NAME_CONTROLLER_ERROR',
  message: 'The specified parameter for uploading a file is incorrect or empty',
  statusCode: statusCode.clientSide.badRequest,
});
