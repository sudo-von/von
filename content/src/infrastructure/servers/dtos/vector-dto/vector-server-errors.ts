import statusCode from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  VectorErrorCode,
  VideoErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  InvalidVectorDescriptionLengthError,
  InvalidVectorFileMimeTypeError,
  InvalidVectorFileSizeError,
  VectorCreationFailedError,
  VectorNotFoundError,
  VectorUpdateFailedError,
} from '../../../../domain/entities/vector-entity/vector-errors';

export const VectorCreationFailedServerError = createServerErrorFactory({
  code: 'VECTOR_CREATION_FAILED',
  error: VectorCreationFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const VectorNotFoundServerError = createServerErrorFactory({
  code: 'VECTOR_NOT_FOUND',
  error: VectorNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const VectorUpdateFailedServerError = createServerErrorFactory({
  code: 'VECTOR_UPDATE_FAILED',
  error: VectorUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const InvalidVectorDescriptionLengthServerError = createServerErrorFactory({
  code: 'INVALID_VECTOR_DESCRIPTION_LENGTH',
  error: InvalidVectorDescriptionLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidVectorFileMimeTypeServerError = createServerErrorFactory({
  code: 'INVALID_VECTOR_FILE_MIME_TYPE',
  error: InvalidVectorFileMimeTypeError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidVectorFileSizeServerError = createServerErrorFactory({
  code: 'INVALID_VECTOR_FILE_SIZE',
  error: InvalidVectorFileSizeError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const vectorServerErrors: Record<VectorErrorCode, ServerErrorFactory> = {
  VECTOR_CREATION_FAILED: VectorCreationFailedServerError,
  VECTOR_NOT_FOUND: VectorNotFoundServerError,
  VECTOR_UPDATE_FAILED: VectorUpdateFailedServerError,
  INVALID_VECTOR_DESCRIPTION_LENGTH: InvalidVectorDescriptionLengthServerError,
  INVALID_VECTOR_FILE_MIME_TYPE: InvalidVectorFileMimeTypeServerError,
  INVALID_VECTOR_FILE_SIZE: InvalidVectorFileSizeServerError,
};
