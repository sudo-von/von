import statusCode from '../status-codes';
import { ControllerError } from './controller-error-codes';
import { PERMISSION_DENIED } from '../../../domain/errors/common-error';
import { createControllerErrorFactory } from './controller-error-factory';

export type ProfileControllerErrorCode =
| 'INTERNAL_SERVER_CONTROLLER_ERROR'
| 'PERMISSION_DENIED_CONTROLLER_ERROR';

export const INTERNAL_SERVER_CONTROLLER: ControllerError = {
  code: 'INTERNAL_SERVER_CONTROLLER_ERROR',
  message: 'An internal server error occurred. Please try again later.',
  statusCode: statusCode.serverSide.internalServer,
};

export const PERMISSION_DENIED_CONTROLLER: ControllerError = {
  code: 'PERMISSION_DENIED_CONTROLLER_ERROR',
  message: PERMISSION_DENIED.message,
  statusCode: statusCode.clientSide.forbidden,
};

export const InternalServerControllerError = createControllerErrorFactory(
  INTERNAL_SERVER_CONTROLLER,
);

export const PermissionDeniedControllerError = createControllerErrorFactory(
  PERMISSION_DENIED_CONTROLLER,
);
