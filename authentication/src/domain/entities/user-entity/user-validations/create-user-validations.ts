import {
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidUsernameLengthError,
  InvalidPasswordLengthError,
} from '../user-errors';
import {
  CreateUser,
} from '../user-entities';
import {
  validateNameLength,
  validateEmailLength,
  validateUsernameLength,
  validatePasswordLength,
} from './user-validations';

const validateUserCreation = (payload: CreateUser) => {
  const isNameLengthValid = validateNameLength(payload.name);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isEmailLengthValid = validateEmailLength(payload.email);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;

  const isPasswordLengthValid = validatePasswordLength(payload.password);
  if (!isPasswordLengthValid) throw InvalidPasswordLengthError;
};

export default validateUserCreation;
