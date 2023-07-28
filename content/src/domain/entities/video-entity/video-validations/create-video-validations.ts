import {
  InvalidVideoDomainError,
  InvalidVideoUrlLengthError,
} from '../video-errors';
import {
  CreateBasicVideo,
} from '../video-entities';
import {
  validateVideoMediaUrlDomain,
  validateVideoMediaUrlLength,
} from './video-validations';

const validateAboutCreation = (payload: CreateBasicVideo) => {
  const isDomainValid = validateVideoMediaUrlDomain(payload.media.url);
  if (!isDomainValid) throw InvalidVideoDomainError;

  const isUrlLengthValid = validateVideoMediaUrlLength(payload.media.url);
  if (!isUrlLengthValid) throw InvalidVideoUrlLengthError;
};

export default validateAboutCreation;
