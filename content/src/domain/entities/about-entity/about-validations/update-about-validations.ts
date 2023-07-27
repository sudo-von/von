import {
  InvalidAboutDomainError,
  InvalidAboutUrlLengthError,
} from '../about-errors';
import {
  UpdateBasicAbout,
} from '../about-entities';
import {
  validateAboutMediaUrlDomain,
  validateAboutMediaUrlLength,
} from './about-validations';

const validateAboutUpdate = (payload: UpdateBasicAbout) => {
  const isDomainValid = validateAboutMediaUrlDomain(payload.media.url);
  if (!isDomainValid) throw InvalidAboutDomainError;

  const isUrlLengthValid = validateAboutMediaUrlLength(payload.media.url);
  if (!isUrlLengthValid) throw InvalidAboutUrlLengthError;
};

export default validateAboutUpdate;
