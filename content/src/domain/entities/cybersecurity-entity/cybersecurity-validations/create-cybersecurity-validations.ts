import {
  InvalidCybersecurityDomainError,
  InvalidCybersecurityUrlLengthError,
} from '../cybersecurity-errors';
import {
  CreateBasicCybersecurity,
} from '../cybersecurity-entities';
import {
  validateCybersecurityMediaUrlDomain,
  validateCybersecurityMediaUrlLength,
} from './cybersecurity-validations';

const validateCybersecurityCreation = (payload: CreateBasicCybersecurity) => {
  const isDomainValid = validateCybersecurityMediaUrlDomain(payload.media.url);
  if (!isDomainValid) throw InvalidCybersecurityDomainError;

  const isUrlLengthValid = validateCybersecurityMediaUrlLength(payload.media.url);
  if (!isUrlLengthValid) throw InvalidCybersecurityUrlLengthError;
};

export default validateCybersecurityCreation;
