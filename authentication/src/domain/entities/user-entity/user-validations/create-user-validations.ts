import {
  InvalidNameError,
  InvalidUsernameError,
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
} from '../user-errors';
import {
  CreateUser,
} from '../user-entities';
import {
  validateName,
  validateUsername,
  validateNameLength,
  validateEmailLength,
  validatePasswordLength,
  validateUsernameLength,
} from './user-validations';

const validateUserCreation = (payload: CreateUser) => {
  const formattedName = payload.name.trim();
  const formattedEmail = payload.email.trim();
  const formattedUsername = payload.username.trim();
  const formattedPassword = payload.password.trim();

  const isNameValid = validateName(formattedName);
  if (!isNameValid) throw InvalidNameError;

  const isNameLengthValid = validateNameLength(formattedName);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isEmailLengthValid = validateEmailLength(formattedEmail);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isUsernameValid = validateUsername(formattedUsername);
  if (!isUsernameValid) throw InvalidUsernameError;

  const isUsernameLengthValid = validateUsernameLength(formattedUsername);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;

  const isPasswordLengthValid = validatePasswordLength(formattedPassword);
  if (!isPasswordLengthValid) throw InvalidPasswordLengthError;
};

export default validateUserCreation;
