import {
  InvalidVideoDomainError,
  InvalidVideoUrlLengthError,
} from '../video-errors';
import {
  CreateVideo,
} from '../video-entitites';
import {
  validateVideoUrlDomain,
  validateVideoUrlLength,
} from './video-validations';

const validateVideoCreation = (payload: CreateVideo) => {
  const isDomainValid = validateVideoUrlDomain(payload.url);
  if (!isDomainValid) throw InvalidVideoDomainError;

  const isUrlLengthValid = validateVideoUrlLength(payload.url);
  if (!isUrlLengthValid) throw InvalidVideoUrlLengthError;
};

export default validateVideoCreation;
