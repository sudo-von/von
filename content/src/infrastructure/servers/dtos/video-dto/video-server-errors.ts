import statusCode from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  VideoErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  VideoNotFoundError,
  VideoUpdateFailedError,
  InvalidVideoDomainError,
  InvalidVideoUrlLengthError,
} from '../../../../domain/entities/video-entity/video-errors';

export const VideoNotFoundServerError = createServerErrorFactory({
  code: 'VIDEO_NOT_FOUND',
  error: VideoNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const VideoUpdateFailedServerError = createServerErrorFactory({
  code: 'VIDEO_UPDATE_FAILED',
  error: VideoUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const InvalidVideoDomainServerError = createServerErrorFactory({
  code: 'INVALID_VIDEO_DOMAIN',
  error: InvalidVideoDomainError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidVideoUrlLengthServerError = createServerErrorFactory({
  code: 'INVALID_VIDEO_URL_LENGTH',
  error: InvalidVideoUrlLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const videoServerErrors: Record<VideoErrorCode, ServerErrorFactory> = {
  VIDEO_NOT_FOUND: VideoNotFoundServerError,
  VIDEO_UPDATE_FAILED: VideoUpdateFailedServerError,
  INVALID_VIDEO_DOMAIN: InvalidVideoDomainServerError,
  INVALID_VIDEO_URL_LENGTH: InvalidVideoUrlLengthServerError,
};
