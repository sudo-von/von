import {
  InvalidAboutDomainError,
  InvalidAboutUrlLengthError,
} from '../about-errors';
import {
  CreateBasicAbout,
} from '../about-entities';
import {
  validateAboutMediaUrlDomain,
  validateAboutMediaUrlLength,
} from './about-validations';

const validateAboutCreation = (payload: CreateBasicAbout) => {
  const isDomainValid = validateAboutMediaUrlDomain(payload.media.url);
  if (!isDomainValid) throw InvalidAboutDomainError;

  const isUrlLengthValid = validateAboutMediaUrlLength(payload.media.url);
  if (!isUrlLengthValid) throw InvalidAboutUrlLengthError;
};

export default validateAboutCreation;
