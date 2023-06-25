import statusCode from '../status-codes';
import {
  PROFILE_NOT_FOUND,
  SINGLE_PROFILE_ONLY,
  PROFILE_UPDATE_FAILED,
  PROFILE_CREATION_FAILED,
  INVALID_PROFILE_INTEREST_LENGTH,
  INVALID_PROFILE_POSITION_LENGTH,
  INVALID_PROFILE_QUOTE_LENGTH,
} from '../../../domain/errors/profile-error';
import { ControllerError } from './controller-error-codes';
import { createControllerErrorFactory } from './controller-error-factory';

export const INVALID_PROFILE_INTEREST_LENGTH_CONTROLLER: ControllerError = {
  code: 'INVALID_PROFILE_INTEREST_LENGTH_CONTROLLER_ERROR',
  message: INVALID_PROFILE_INTEREST_LENGTH.message,
  statusCode: statusCode.clientSide.unprocessableEntity,
};

export const INVALID_PROFILE_POSITION_LENGTH_CONTROLLER: ControllerError = {
  code: 'INVALID_PROFILE_POSITION_LENGTH_CONTROLLER_ERROR',
  message: INVALID_PROFILE_POSITION_LENGTH.message,
  statusCode: statusCode.clientSide.unprocessableEntity,
};

export const INVALID_PROFILE_QUOTE_LENGTH_CONTROLLER: ControllerError = {
  code: 'INVALID_PROFILE_QUOTE_LENGTH_CONTROLLER_ERROR',
  message: INVALID_PROFILE_QUOTE_LENGTH.message,
  statusCode: statusCode.clientSide.unprocessableEntity,
};

export const PROFILE_CREATION_FAILED_CONTROLLER: ControllerError = {
  code: 'PROFILE_CREATION_FAILED_CONTROLLER_ERROR',
  message: PROFILE_CREATION_FAILED.message,
  statusCode: statusCode.serverSide.internalServer,
};

export const PROFILE_NOT_FOUND_CONTROLLER: ControllerError = {
  code: 'PROFILE_NOT_FOUND_CONTROLLER_ERROR',
  message: PROFILE_NOT_FOUND.message,
  statusCode: statusCode.clientSide.notFound,
};

export const PROFILE_UPDATE_FAILED_CONTROLLER: ControllerError = {
  code: 'PROFILE_UPDATE_FAILED_CONTROLLER_ERROR',
  message: PROFILE_UPDATE_FAILED.message,
  statusCode: statusCode.serverSide.internalServer,
};

export const SINGLE_PROFILE_ONLY_CONTROLLER: ControllerError = {
  code: 'SINGLE_PROFILE_ONLY_CONTROLLER_ERROR',
  message: SINGLE_PROFILE_ONLY.message,
  statusCode: statusCode.clientSide.conflict,
};

export const InvalidProfileInterestLengthControllerError = createControllerErrorFactory(
  INVALID_PROFILE_INTEREST_LENGTH_CONTROLLER,
);

export const InvalidProfilePositionLengthControllerError = createControllerErrorFactory(
  INVALID_PROFILE_POSITION_LENGTH_CONTROLLER,
);

export const InvalidProfileQuoteLengthControllerError = createControllerErrorFactory(
  INVALID_PROFILE_QUOTE_LENGTH_CONTROLLER,
);

export const ProfileCreationFailedControllerError = createControllerErrorFactory(
  PROFILE_CREATION_FAILED_CONTROLLER,
);

export const ProfileNotFoundControllerError = createControllerErrorFactory(
  PROFILE_NOT_FOUND_CONTROLLER,
);

export const ProfileUpdateFailedControllerError = createControllerErrorFactory(
  PROFILE_CREATION_FAILED_CONTROLLER,
);

export const SingleProfileOnlyControllerError = createControllerErrorFactory(
  SINGLE_PROFILE_ONLY_CONTROLLER,
);
