import {
  CreateCybersecurityEntity,
} from '../cybersecurity-entity';
import {
  InvalidCybersecurityTitleLengthError,
  InvalidCybersecurityDescriptionLengthError,
} from '../cybersecurity-errors';
import {
  validateCybersecurityTitle,
  validateCybersecurityDescription,
} from './cybersecurity-validations';
import {
  InvalidUsernameNameLengthError,
} from '../../user/user-errors';
import validateUsernameLength from '../../user/validations/user-validations';

const validateCybersecurityCreation = (payload: CreateCybersecurityEntity) => {
  const isTitleLengthValid = validateCybersecurityTitle(payload.title);
  if (!isTitleLengthValid) throw InvalidCybersecurityTitleLengthError;

  const isDescriptionLengthValid = validateCybersecurityDescription(payload.description);
  if (!isDescriptionLengthValid) throw InvalidCybersecurityDescriptionLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateCybersecurityCreation;
