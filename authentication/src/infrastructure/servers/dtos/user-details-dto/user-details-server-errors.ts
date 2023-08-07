import statusCodes from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  UserDetailsDomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  InvalidQuoteLengthError,
  InvalidInterestLengthError,
  InvalidPositionLengthError,
  UserDetailsReplacementFailedError,
} from '../../../../domain/entities/user-details-entity/user-details-errors';

export const InvalidInterestLengthServerError = createServerErrorFactory({
  code: 'INVALID_INTEREST_LENGTH',
  error: InvalidInterestLengthError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidPositionLengthServerError = createServerErrorFactory({
  code: 'INVALID_POSITION_LENGTH',
  error: InvalidPositionLengthError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidQuotetLengthServerError = createServerErrorFactory({
  code: 'INVALID_QUOTE_LENGTH',
  error: InvalidQuoteLengthError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const UserDetailsReplacementFailedServerError = createServerErrorFactory({
  code: 'USER_DETAILS_REPLACEMENT_FAILED',
  error: UserDetailsReplacementFailedError.error,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const userDetailsServerErrors: Record<UserDetailsDomainErrorCode, ServerErrorFactory> = {
  INVALID_INTEREST_LENGTH: InvalidInterestLengthServerError,
  INVALID_POSITION_LENGTH: InvalidPositionLengthServerError,
  INVALID_QUOTE_LENGTH: InvalidQuotetLengthServerError,
  USER_DETAILS_REPLACEMENT_FAILED: UserDetailsReplacementFailedServerError,
};
