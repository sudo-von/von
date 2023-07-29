import {
  InvalidVideoMediaDomainError,
  InvalidVideoMediaUrlLengthError,
} from '../video-media-errors';
import {
  UpdateVideoMedia,
} from '../video-media-entities';
import {
  validateVideoMediaUrlDomain,
  validateVideoMediaUrlLength,
} from './video-media-validations';

const validateVideoMediaUpdate = (payload: UpdateVideoMedia) => {
  const isDomainValid = validateVideoMediaUrlDomain(payload.url);
  if (!isDomainValid) throw InvalidVideoMediaDomainError;

  const isUrlLengthValid = validateVideoMediaUrlLength(payload.url);
  if (!isUrlLengthValid) throw InvalidVideoMediaUrlLengthError;
};

export default validateVideoMediaUpdate;
