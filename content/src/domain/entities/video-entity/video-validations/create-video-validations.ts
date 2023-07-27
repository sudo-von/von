import {
  InvalidVideoDomainError,
  InvalidVideoUrlLengthError,
} from '../video-errors';
import {
  CreateVideo,
} from '../video-entitites';
import {
  validateVideoDomain,
  validateVideoUrlLength,
} from './video-validations';

const validateVideoCreation = (payload: CreateVideo) => {
  const isDomainValid = validateVideoDomain(payload.url);
  if (!isDomainValid) throw InvalidVideoDomainError;

  const isUrlLengthValid = validateVideoUrlLength(payload.url);
  if (!isUrlLengthValid) throw InvalidVideoUrlLengthError;
};

export default validateVideoCreation;
