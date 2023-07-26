import {
  InvalidVideoAltLengthError,
  InvalidVideoUrlLengthError,
} from '../video-errors';
import {
  CreateVideo,
} from '../video-entitites';
import {
  validateAltLength,
  validateUrlLength,
} from './video-validations';

const validateVideoCreation = (payload: CreateVideo) => {
  const isAltLengthValid = validateAltLength(payload.alt);
  if (!isAltLengthValid) throw InvalidVideoAltLengthError;

  const isUrlLengthValid = validateUrlLength(payload.url);
  if (!isUrlLengthValid) throw InvalidVideoUrlLengthError;
};

export default validateVideoCreation;
