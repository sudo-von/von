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
  UpdateVectorMediaFile,
} from '../../media-entity/media-entities';

const validateVectorUpdate = (payload: UpdateVectorMediaFile) => {
  const isDescriptionLengthValid = validateVectorDescriptionLength(payload.description);
  if (!isDescriptionLengthValid) throw InvalidVectorDescriptionLengthError;

  const isVectorFileMimetypeValid = validateVectorFileMimetype(payload.mimetype);
  if (!isVectorFileMimetypeValid) throw InvalidVectorFileMimeTypeError;

  const isVectorFileSizeValid = validateVectorFileSize(payload.size);
  if (!isVectorFileSizeValid) throw InvalidVectorFileSizeError;
};

export default validateVectorUpdate;
