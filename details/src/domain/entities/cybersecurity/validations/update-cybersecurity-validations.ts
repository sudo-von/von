import {
  UpdateCybersecurityEntity,
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
} from '../../../errors/user-error';
import validateUsernameLength from '../../user/validations/user-validations';

const validateCybersecurityUpdate = (payload: UpdateCybersecurityEntity) => {
  const isDescriptionLengthValid = validateCybersecurityDescription(payload.description);
  if (!isDescriptionLengthValid) throw InvalidCybersecurityDescriptionLengthError;

  const isTitleLengthValid = validateCybersecurityTitle(payload.title);
  if (!isTitleLengthValid) throw InvalidCybersecurityTitleLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateCybersecurityUpdate;
