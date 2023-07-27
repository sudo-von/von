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
  InvalidTitleLengthError,
  ContentUpdateFailedError,
  InvalidSubtitleLengthError,
  InvalidDescriptionLengthError,
} from '../../../../domain/entities/content-entity/content-errors';

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

export const contentServerErrors: Record<ContentServerErrorCode, ServerErrorFactory> = {
  CONTENT_UPDATE_FAILED: ContentUpdateFailedServerError,
  CONTENT_NOT_FOUND: ContentNotFoundServerError,
  INVALID_DESCRIPTION_LENGTH: InvalidDescriptionLengthServerError,
  INVALID_SUBTITLE_LENGTH: InvalidSubtitleLengthServerError,
  INVALID_TITLE_LENGTH: InvalidTitleLengthServerError,
};
