import {
  InternalServerControllerError,
} from './request-controller-errors';
import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../../services/token-service/token-service-errors';

export const TokenServiceExpiredTokenControllerError = createControllerErrorFactory({
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN',
  message: TokenServiceExpiredTokenError.message,
  statusCode: statusCode.clientSide.unauthorized,
});

export const TokenServiceFailedTokenGenerationError = createControllerErrorFactory({
  code: 'TOKEN_SERVICE_FAILED_TOKEN_GENERATION',
  message: InternalServerControllerError.message,
  statusCode: statusCode.serverSide.internalServer,
});

export const TokenServiceInvalidTokenControllerError = createControllerErrorFactory({
  code: 'TOKEN_SERVICE_INVALID_TOKEN',
  message: TokenServiceInvalidTokenError.message,
  statusCode: statusCode.clientSide.forbidden,
});
