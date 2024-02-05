import {
  InvalidNameError,
  InvalidEmailError,
  InvalidUsernameError,
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidUsernameLengthError,
} from '../user-errors';
import {
  UpdateUser,
} from '../user-entities';
import {
  validateName,
  validateEmail,
  validateUsername,
  validateNameLength,
  validateEmailLength,
  validateUsernameLength,
} from './user-validations';

const validateUserUpdate = (payload: UpdateUser) => {
  const formattedName = payload.name.trim();
  const formattedEmail = payload.email.trim();
  const formattedUsername = payload.username.trim();

  const isNameValid = validateName(formattedName);
  if (!isNameValid) throw InvalidNameError;

  const isNameLengthValid = validateNameLength(formattedName);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isEmailValid = validateEmail(formattedEmail);
  if (!isEmailValid) throw InvalidEmailError;

  const isEmailLengthValid = validateEmailLength(formattedEmail);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isUsernameValid = validateUsername(formattedUsername);
  if (!isUsernameValid) throw InvalidUsernameError;

  const isUsernameLengthValid = validateUsernameLength(formattedUsername);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;
};

export default validateUserUpdate;
