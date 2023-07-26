import {
  InvalidVectorFileSizeError,
  InvalidVectorAltLengthError,
  InvalidVectorFileMimeTypeError,
} from '../vector-errors';
import {
  CreateVectorFile,
} from '../vector-entities';
import {
  validateVectorFileSize,
  validateVectorAltLength,
  validateVectorFileMimetype,
} from './vector-validations';

const validateVectorFileCreation = (payload: CreateVectorFile) => {
  const isAltLengthValid = validateVectorAltLength(payload.alt);
  if (!isAltLengthValid) throw InvalidVectorAltLengthError;

  const isVectorFileMimetypeValid = validateVectorFileMimetype(payload.mimetype);
  if (!isVectorFileMimetypeValid) throw InvalidVectorFileMimeTypeError;

  const isVectorFileSizeValid = validateVectorFileSize(payload.size);
  if (!isVectorFileSizeValid) throw InvalidVectorFileSizeError;
};

export default validateVectorFileCreation;
