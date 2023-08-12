import {
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
} from '../user-errors';
import {
  CreateUser,
} from '../user-entities';
import {
  validateNameLength,
  validateEmailLength,
  validatePasswordLength,
  validateUsernameLength,
} from './user-validations';

const validateUserCreation = (payload: CreateUser) => {
  const isEmailLengthValid = validateEmailLength(payload.email);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isNameLengthValid = validateNameLength(payload.name);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isPasswordLengthValid = validatePasswordLength(payload.password);
  if (!isPasswordLengthValid) throw InvalidPasswordLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;
};

export default validateUserCreation;
