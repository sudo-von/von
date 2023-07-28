import {
  InvalidVectorFileSizeError,
  InvalidVectorFileMimeTypeError,
  InvalidVectorDescriptionLengthError,
} from '../vector-errors';
import {
  validateVectorFileSize,
  validateVectorDescriptionLength,
  validateVectorFileMimetype,
} from './vector-validations';
import {
  CreateVectorMediaFile,
} from '../../media-entity/media-entities';

const validateVectorCreation = (payload: CreateVectorMediaFile) => {
  const isDescriptionLengthValid = validateVectorDescriptionLength(payload.description);
  if (!isDescriptionLengthValid) throw InvalidVectorDescriptionLengthError;

  const isVectorFileMimetypeValid = validateVectorFileMimetype(payload.mimetype);
  if (!isVectorFileMimetypeValid) throw InvalidVectorFileMimeTypeError;

  const isVectorFileSizeValid = validateVectorFileSize(payload.size);
  if (!isVectorFileSizeValid) throw InvalidVectorFileSizeError;
};

export default validateVectorCreation;
