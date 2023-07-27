import {
  InvalidVideoAltLengthError,
  InvalidVideoUrlLengthError,
} from '../video-errors';
import {
  UpdateVideo,
} from '../video-entitites';
import {
  validateVideoAltLength,
  validateVideoUrlLength,
} from './video-validations';

const validateVideoUpdate = (payload: UpdateVideo) => {
  const isAltLengthValid = validateVideoAltLength(payload.alt);
  if (!isAltLengthValid) throw InvalidVideoAltLengthError;

  const isUrlLengthValid = validateVideoUrlLength(payload.url);
  if (!isUrlLengthValid) throw InvalidVideoUrlLengthError;
};

export default validateVideoUpdate;
