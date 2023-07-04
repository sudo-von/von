import {
  ControllerError,
} from './controller-error-codes';
import {
  INTERNAL_SERVER_CONTROLLER,
} from './common-controller-error';
import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import { TokenServiceExpiredTokenError, TokenServiceInvalidTokenError } from '../../services/token-service/token-service-errors';

export const TOKEN_SERVICE_INVALID_TOKEN_CONTROLLER: ControllerError = {
  code: 'TOKEN_SERVICE_INVALID_TOKEN_CONTROLLER_ERROR',
  message: TokenServiceInvalidTokenError.message,
  statusCode: statusCode.clientSide.forbidden,
};

export const TOKEN_SERVICE_EXPIRED_TOKEN_CONTROLLER: ControllerError = {
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN_CONTROLLER_ERROR',
  message: TokenServiceExpiredTokenError.message,
  statusCode: statusCode.clientSide.unauthorized,
};

export const TOKEN_SERVICE_FAILED_TOKEN_GENERATION_CONTROLLER: ControllerError = {
  code: 'TOKEN_SERVICE_FAILED_TOKEN_GENERATION_CONTROLLER_ERROR',
  message: INTERNAL_SERVER_CONTROLLER.message,
  statusCode: statusCode.serverSide.internalServer,
};

export const TokenServiceInvalidTokenControllerError = createControllerErrorFactory(
  TOKEN_SERVICE_INVALID_TOKEN_CONTROLLER,
);

export const TokenServiceExpiredTokenControllerError = createControllerErrorFactory(
  TOKEN_SERVICE_EXPIRED_TOKEN_CONTROLLER,
);

export const TokenServiceFailedTokenGenerationError = createControllerErrorFactory(
  TOKEN_SERVICE_FAILED_TOKEN_GENERATION_CONTROLLER,
);
