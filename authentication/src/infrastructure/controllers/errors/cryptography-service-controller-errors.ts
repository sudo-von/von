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

export const CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_CONTROLLER: ControllerError = {
  code: 'CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_CONTROLLER_ERROR',
  message: INTERNAL_SERVER_CONTROLLER.message,
  statusCode: statusCode.serverSide.internalServer,
};

export const CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_CONTROLLER: ControllerError = {
  code: 'CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_CONTROLLER_ERROR',
  message: INTERNAL_SERVER_CONTROLLER.message,
  statusCode: statusCode.serverSide.internalServer,
};

export const CryptographyServiceInvalidCompareControllerError = createControllerErrorFactory(
  CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_CONTROLLER,
);

export const CryptographyServiceInvalidHashDataControllerError = createControllerErrorFactory(
  CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_CONTROLLER,
);
