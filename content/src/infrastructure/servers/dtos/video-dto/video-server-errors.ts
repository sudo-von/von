import statusCode from 'http-status-codes';
import {
  ContentServerErrorCode, VideoServerErrorCode,
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
import { InvalidVideoAltLengthError, VideoAlreadyCreatedError, VideoCreationFailedError } from '../../../../domain/entities/video-entity/video-errors';

export const InvalidVideoAltLengthServerError = createServerErrorFactory({
  code: 'INVALID_VIDEO_ALT_LENGTH',
  error: InvalidVideoAltLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidVideoUrlLengthServerError = createServerErrorFactory({
  code: 'INVALID_VIDEO_URL_LENGTH',
  error: InvalidSubtitleLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const VideoAlreadyCreatedServerError = createServerErrorFactory({
  code: 'VIDEO_ALREADY_CREATED',
  error: VideoAlreadyCreatedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const VideoCreationFailedServerError = createServerErrorFactory({
  code: 'VIDEO_CREATION_FAILED',
  error: VideoCreationFailedError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const VideoNotFoundServerError = createServerErrorFactory({
  code: 'VIDEO_NOT_FOUND',
  error: VideoCreationFailedError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const VideoUpdateFailedServerError = createServerErrorFactory({
  code: 'VIDEO_UPDATE_FAILED',
  error: VideoCreationFailedError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const videoServerErrors: Record<VideoServerErrorCode, ServerErrorFactory> = {
  INVALID_VIDEO_ALT_LENGTH: InvalidVideoAltLengthServerError,
  INVALID_VIDEO_URL_LENGTH: InvalidVideoUrlLengthServerError,
  VIDEO_ALREADY_CREATED: VideoAlreadyCreatedServerError,
  VIDEO_CREATION_FAILED: VideoCreationFailedServerError,
  VIDEO_NOT_FOUND: VideoNotFoundServerError,
  VIDEO_UPDATE_FAILED: VideoUpdateFailedServerError,
};
