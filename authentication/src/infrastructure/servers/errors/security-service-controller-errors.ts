import {
  InternalServerControllerError,
} from './request-controller-errors';
import {
  createControllerErrorFactory,
} from './controller-error-factory';

export const SecurityServiceFailedChecksumComputingControllerError = createControllerErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_CHECKSUM_COMPUTING',
  message: InternalServerControllerError.message,
  statusCode: InternalServerControllerError.statusCode,
});

export const SecurityServicFailedHashComparisonControllerError = createControllerErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_HASH_COMPARISON',
  message: InternalServerControllerError.message,
  statusCode: InternalServerControllerError.statusCode,
});

export const SecurityServiceFailedPasswordHashingControllerError = createControllerErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_PASSWORD_HASHING',
  message: InternalServerControllerError.message,
  statusCode: InternalServerControllerError.statusCode,
});
