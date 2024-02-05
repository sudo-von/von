import statusCodes from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../../errors/server-error-factory';
import {
  UserDetailsDomainErrorCode,
} from '../../../../../domain/entities/error-entity/error-codes';
import {
  InvalidQuoteLengthError,
  InvalidInterestLengthError,
  InvalidPositionLengthError,
  UserDetailsReplaceFailedError,
} from '../../../../../domain/entities/user-details-entity/user-details-errors';

export const InvalidInterestLengthServerError = createServerErrorFactory({
  code: 'INVALID_INTEREST_LENGTH',
  message: InvalidInterestLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidPositionLengthServerError = createServerErrorFactory({
  code: 'INVALID_POSITION_LENGTH',
  message: InvalidPositionLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidQuotetLengthServerError = createServerErrorFactory({
  code: 'INVALID_QUOTE_LENGTH',
  message: InvalidQuoteLengthError.message,
  statusCode: statusCodes.BAD_REQUEST,
});

export const UserDetailsReplaceFailedServerError = createServerErrorFactory({
  code: 'USER_DETAILS_REPLACE_FAILED',
  message: UserDetailsReplaceFailedError.message,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const userDetailsServerErrors: Record<UserDetailsDomainErrorCode, ServerErrorFactory> = {
  INVALID_INTEREST_LENGTH: InvalidInterestLengthServerError,
  INVALID_POSITION_LENGTH: InvalidPositionLengthServerError,
  INVALID_QUOTE_LENGTH: InvalidQuotetLengthServerError,
  USER_DETAILS_REPLACE_FAILED: UserDetailsReplaceFailedServerError,
};
