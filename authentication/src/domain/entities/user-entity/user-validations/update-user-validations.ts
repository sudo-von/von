import {
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidUsernameLengthError,
} from '../user-errors';
import {
  UpdateUser,
} from '../user-entities';
import {
  validateNameLength,
  validateEmailLength,
  validateUsernameLength,
} from './user-validations';

const validateUserUpdate = (payload: UpdateUser) => {
  const isEmailLengthValid = validateEmailLength(payload.email);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isNameLengthValid = validateNameLength(payload.name);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;
};

export default validateUserUpdate;
