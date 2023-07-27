import statusCode from 'http-status-codes';
import {
  VideoServerErrorCode,
} from '../../errors/server-error-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InvalidVideoDomainError,
  VideoNotFoundError,
  VideoUpdateFailedError,
} from '../../../../domain/entities/video-entity/video-errors';
import {
  InvalidSubtitleLengthError,
} from '../../../../domain/entities/content-entity/content-errors';

export const InvalidVideoDomainServerError = createServerErrorFactory({
  code: 'INVALID_VIDEO_DOMAIN',
  error: InvalidVideoDomainError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidVideoUrlLengthServerError = createServerErrorFactory({
  code: 'INVALID_VIDEO_URL_LENGTH',
  error: InvalidSubtitleLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const VideoNotFoundServerError = createServerErrorFactory({
  code: 'VIDEO_NOT_FOUND',
  error: VideoNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const VideoUpdateFailedServerError = createServerErrorFactory({
  code: 'VIDEO_UPDATE_FAILED',
  error: VideoUpdateFailedError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const videoServerErrors: Record<VideoServerErrorCode, ServerErrorFactory> = {
  INVALID_VIDEO_DOMAIN: InvalidVideoDomainServerError,
  INVALID_VIDEO_URL_LENGTH: InvalidVideoUrlLengthServerError,
  VIDEO_NOT_FOUND: VideoNotFoundServerError,
  VIDEO_UPDATE_FAILED: VideoUpdateFailedServerError,
};
