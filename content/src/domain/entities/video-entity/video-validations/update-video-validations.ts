import {
  InvalidVideoDomainError,
  InvalidVideoUrlLengthError,
} from '../video-errors';
import {
  UpdateBasicVideo,
} from '../video-entities';
import {
  validateVideoMediaUrlDomain,
  validateVideoMediaUrlLength,
} from './video-validations';

const validateAboutUpdate = (payload: UpdateBasicVideo) => {
  const isDomainValid = validateVideoMediaUrlDomain(payload.media.url);
  if (!isDomainValid) throw InvalidVideoDomainError;

  const isUrlLengthValid = validateVideoMediaUrlLength(payload.media.url);
  if (!isUrlLengthValid) throw InvalidVideoUrlLengthError;
};

export default validateAboutUpdate;
