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
  if (payload.name) {
    const isNameLengthValid = validateNameLength(payload.name);
    if (!isNameLengthValid) throw InvalidNameLengthError;
  }

  if (payload.email) {
    const isEmailLengthValid = validateEmailLength(payload.email);
    if (!isEmailLengthValid) throw InvalidEmailLengthError;
  }

  if (payload.username) {
    const isUsernameLengthValid = validateUsernameLength(payload.username);
    if (!isUsernameLengthValid) throw InvalidUsernameLengthError;
  }
};

export default validateUserUpdate;
