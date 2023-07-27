import {
  InvalidVideoDomainError,
  InvalidVideoUrlLengthError,
} from '../video-errors';
import {
  UpdateVideo,
} from '../video-entitites';
import {
  validateVideoUrlDomain,
  validateVideoUrlLength,
} from './video-validations';

const validateVideoUpdate = (payload: UpdateVideo) => {
  const isDomainValid = validateVideoUrlDomain(payload.url);
  if (!isDomainValid) throw InvalidVideoDomainError;

  const isUrlLengthValid = validateVideoUrlLength(payload.url);
  if (!isUrlLengthValid) throw InvalidVideoUrlLengthError;
};

export default validateVideoUpdate;
