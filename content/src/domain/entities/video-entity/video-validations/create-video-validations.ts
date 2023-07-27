import {
  InvalidVideoAltLengthError,
  InvalidVideoUrlLengthError,
} from '../video-errors';
import {
  CreateVideo,
} from '../video-entitites';
import {
  validateVideoAltLength,
  validateVideoUrlLength,
} from './video-validations';

const validateVideoCreation = (payload: CreateVideo) => {
  const isAltLengthValid = validateVideoAltLength(payload.alt);
  if (!isAltLengthValid) throw InvalidVideoAltLengthError;

  const isUrlLengthValid = validateVideoUrlLength(payload.url);
  if (!isUrlLengthValid) throw InvalidVideoUrlLengthError;
};

export default validateVideoCreation;
