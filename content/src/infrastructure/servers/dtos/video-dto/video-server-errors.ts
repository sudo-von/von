import statusCode from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  VideoErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  InvalidVideoMediaDomainError,
  InvalidVideoMediaUrlLengthError,
} from '../../../../domain/entities/video-media-entity/video-media-errors';

export const InvalidVideoDomainServerError = createServerErrorFactory({
  code: 'INVALID_VIDEO_DOMAIN',
  error: InvalidVideoMediaDomainError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidVideoUrlLengthServerError = createServerErrorFactory({
  code: 'INVALID_VIDEO_URL_LENGTH',
  error: InvalidVideoMediaUrlLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const videoServerErrors: Record<VideoErrorCode, ServerErrorFactory> = {
  INVALID_VIDEO_DOMAIN: InvalidVideoDomainServerError,
  INVALID_VIDEO_URL_LENGTH: InvalidVideoUrlLengthServerError,
};
