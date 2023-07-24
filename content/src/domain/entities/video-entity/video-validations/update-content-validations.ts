import {
  InvalidVideoAltLengthError,
  InvalidVideoUrlLengthError,
} from '../video-errors';
import {
  UpdateVideo,
} from '../video-entitites';
import {
  validateUrlLength,
  validateAltLength,
} from './video-validations';

const validateVideoUpdate = (payload: UpdateVideo) => {
  const isAltLengthValid = validateAltLength(payload.alt);
  if (!isAltLengthValid) throw InvalidVideoAltLengthError;

  const isUrlLengthValid = validateUrlLength(payload.url);
  if (!isUrlLengthValid) throw InvalidVideoUrlLengthError;
};

export default validateVideoUpdate;
