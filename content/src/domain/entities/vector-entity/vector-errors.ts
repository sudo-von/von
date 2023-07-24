import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import vectorRules from './vector-rules';

export const InvalidVectorAltLengthError = createDomainErrorFactory({
  code: 'INVALID_VECTOR_ALT_LENGTH',
  message: `Please provide an alt that consists of ${vectorRules.alt.content.MIN_LENGTH} to ${vectorRules.alt.content.MAX_LENGTH} characters.`,
});

export const InvalidVectorFileMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_VECTOR_FILE_MIME_TYPE',
  error: `Please provide a vector file with one of the following MIME types: ${vectorRules.mimetype.content.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidVectorFileSizeError = createDomainErrorFactory({
  code: 'INVALID_VECTOR_FILE_SIZE',
  error: `Please provide a vector file that consists of ${vectorRules.size.content.MIN_BYTES.toLocaleString()} to ${vectorRules.size.content.MAX_BYTES.toLocaleString()} bytes.`,
});

export const VectorCreationFailedError = createDomainErrorFactory({
  code: 'VECTOR_CREATION_FAILED',
  error: 'The vector you attempted to create could not be created.',
});

export const VectorUpdateFailedError = createDomainErrorFactory({
  code: 'VECTOR_UPDATE_FAILED',
  error: 'The vector you attempted to update could not be updated.',
});
