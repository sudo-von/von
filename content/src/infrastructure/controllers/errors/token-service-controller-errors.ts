import {
  ControllerError,
} from './controller-error-codes';
import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import {
  TOKEN_SERVICE_EXPIRED_TOKEN,
  TOKEN_SERVICE_INVALID_TOKEN,
} from '../../services/token-service/token-service-errors';

export const TOKEN_SERVICE_INVALID_TOKEN_CONTROLLER: ControllerError = {
  code: 'TOKEN_SERVICE_INVALID_TOKEN_CONTROLLER_ERROR',
  message: TOKEN_SERVICE_INVALID_TOKEN.message,
  statusCode: statusCode.clientSide.forbidden,
};

export const TOKEN_SERVICE_EXPIRED_TOKEN_CONTROLLER: ControllerError = {
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN_CONTROLLER_ERROR',
  message: TOKEN_SERVICE_EXPIRED_TOKEN.message,
  statusCode: statusCode.clientSide.unauthorized,
};

export const TokenServiceInvalidTokenControllerError = createControllerErrorFactory(
  TOKEN_SERVICE_INVALID_TOKEN_CONTROLLER,
);

export const TokenServiceExpiredTokenControllerError = createControllerErrorFactory(
  TOKEN_SERVICE_EXPIRED_TOKEN_CONTROLLER,
);
