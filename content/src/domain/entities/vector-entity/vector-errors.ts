import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import vectorRules from './vector-rules';

export const InvalidVectorDescriptionLengthError = createDomainErrorFactory({
  code: 'INVALID_VECTOR_DESCRIPTION_LENGTH',
  message: `Please provide a vector description that consists of ${vectorRules.description.content.MIN_LENGTH} to ${vectorRules.description.content.MAX_LENGTH} characters.`,
});

export const InvalidVectorFileMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_VECTOR_FILE_MIME_TYPE',
  message: `Please provide a vector file with one of the following MIME types: ${vectorRules.mimetype.content.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidVectorFileSizeError = createDomainErrorFactory({
  code: 'INVALID_VECTOR_FILE_SIZE',
  message: `Please provide a vector file that consists of ${vectorRules.size.content.MIN_BYTES.toLocaleString()} to ${vectorRules.size.content.MAX_BYTES.toLocaleString()} bytes.`,
});

export const VectorCreationFailedError = createDomainErrorFactory({
  code: 'VECTOR_CREATION_FAILED',
  message: 'The vector you attempted to create could not be created.',
});

export const VectorNotFoundError = createDomainErrorFactory({
  code: 'VECTOR_NOT_FOUND',
  message: 'The requested vector could not be found.',
});

export const VectorUpdateFailedError = createDomainErrorFactory({
  code: 'VECTOR_UPDATE_FAILED',
  message: 'The vector you attempted to update could not be updated.',
});
