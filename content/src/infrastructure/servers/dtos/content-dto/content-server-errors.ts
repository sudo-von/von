import statusCode from 'http-status-codes';
import {
  ContentServerErrorCode,
} from '../../errors/server-error-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InvalidTitleLengthError,
  InvalidSubtitleLengthError,
  InvalidDescriptionLengthError,
} from '../../../../domain/entities/content-entity/content-errors';

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
  INVALID_DESCRIPTION_LENGTH: InvalidDescriptionLengthServerError,
  INVALID_SUBTITLE_LENGTH: InvalidSubtitleLengthServerError,
  INVALID_TITLE_LENGTH: InvalidTitleLengthServerError,
};
