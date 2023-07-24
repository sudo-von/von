import statusCode from 'http-status-codes';
import {
  ContentServerErrorCode,
} from '../../errors/server-error-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  ContentNotFoundError,
  InvalidTypeLengthError,
  InvalidTitleLengthError,
  ContentUpdateFailedError,
  InvalidSubtitleLengthError,
  InvalidDescriptionLengthError,
  ContentTypeAlreadyCreatedError,
} from '../../../../domain/entities/content-entity/content-errors';

export const ContentTypeAlreadyCreatedServerError = createServerErrorFactory({
  code: 'CONTENT_TYPE_ALREADY_CREATED',
  error: ContentTypeAlreadyCreatedError.message,
  statusCode: statusCode.CONFLICT,
});

export const ContentUpdateFailedServerError = createServerErrorFactory({
  code: 'CONTENT_UPDATE_FAILED',
  error: ContentUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const ContentNotFoundServerError = createServerErrorFactory({
  code: 'CONTENT_NOT_FOUND',
  error: ContentNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const InvalidDescriptionLengthServerError = createServerErrorFactory({
  code: 'INVALID_DESCRIPTION_LENGTH',
  error: InvalidDescriptionLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidSubtitleLengthServerError = createServerErrorFactory({
  code: 'INVALID_SUBTITLE_LENGTH',
  error: InvalidSubtitleLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidTitleLengthServerError = createServerErrorFactory({
  code: 'INVALID_TITLE_LENGTH',
  error: InvalidTitleLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidTypeLengthServerError = createServerErrorFactory({
  code: 'INVALID_TYPE_LENGTH',
  error: InvalidTypeLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const contentServerErrors: Record<ContentServerErrorCode, ServerErrorFactory> = {
  CONTENT_TYPE_ALREADY_CREATED: ContentTypeAlreadyCreatedServerError,
  CONTENT_UPDATE_FAILED: ContentUpdateFailedServerError,
  CONTENT_NOT_FOUND: ContentNotFoundServerError,
  INVALID_DESCRIPTION_LENGTH: InvalidDescriptionLengthServerError,
  INVALID_SUBTITLE_LENGTH: InvalidSubtitleLengthServerError,
  INVALID_TITLE_LENGTH: InvalidTitleLengthServerError,
  INVALID_TYPE_LENGTH: InvalidTypeLengthServerError,
};
