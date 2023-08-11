import statusCodes from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  SocialNetworkDomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  SocialNetworkNotFoundError,
  SocialNetworkUpdateFailedError,
  SocialNetworkCreateFailedError,
  InvalidSocialNetworkFileSizeError,
  InvalidSocialNetworkUrlLengthError,
  InvalidSocialNetworkNameLengthError,
  InvalidSocialNetworkFileMimeTypeError,
} from '../../../../domain/entities/social-network-entity/social-network-errors';

export const InvalidSocialNetworkFileMimeTypeServerError = createServerErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_FILE_MIME_TYPE',
  error: InvalidSocialNetworkFileMimeTypeError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidSocialNetworkFileSizeServerError = createServerErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_FILE_SIZE',
  error: InvalidSocialNetworkFileSizeError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidSocialNetworkNameLengthServerError = createServerErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_NAME_LENGTH',
  error: InvalidSocialNetworkNameLengthError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const InvalidSocialNetworkUrlLengthServerError = createServerErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_URL_LENGTH',
  error: InvalidSocialNetworkUrlLengthError.error,
  statusCode: statusCodes.BAD_REQUEST,
});

export const SocialNetworkCreateFailedServerError = createServerErrorFactory({
  code: 'SOCIAL_NETWORK_CREATE_FAILED',
  error: SocialNetworkCreateFailedError.error,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const SocialNetworkNotFoundServerError = createServerErrorFactory({
  code: 'SOCIAL_NETWORK_NOT_FOUND',
  error: SocialNetworkNotFoundError.error,
  statusCode: statusCodes.NOT_FOUND,
});

export const SocialNetworkUpdateFailedServerError = createServerErrorFactory({
  code: 'SOCIAL_NETWORK_UPDATE_FAILED',
  error: SocialNetworkUpdateFailedError.error,
  statusCode: statusCodes.INTERNAL_SERVER_ERROR,
});

export const socialNetworkServerErrors: Record<SocialNetworkDomainErrorCode, ServerErrorFactory> = {
  INVALID_SOCIAL_NETWORK_FILE_MIME_TYPE: InvalidSocialNetworkFileMimeTypeServerError,
  INVALID_SOCIAL_NETWORK_FILE_SIZE: InvalidSocialNetworkFileSizeServerError,
  INVALID_SOCIAL_NETWORK_NAME_LENGTH: InvalidSocialNetworkNameLengthServerError,
  INVALID_SOCIAL_NETWORK_URL_LENGTH: InvalidSocialNetworkUrlLengthServerError,
  SOCIAL_NETWORK_CREATE_FAILED: SocialNetworkCreateFailedServerError,
  SOCIAL_NETWORK_NOT_FOUND: SocialNetworkNotFoundServerError,
  SOCIAL_NETWORK_UPDATE_FAILED: SocialNetworkUpdateFailedServerError,
};
