import {
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
} from '../user-errors';
import {
  CreateUserWithFile,
} from '../user-entities';
import {
  validateNameLength,
  validateEmailLength,
  validatePasswordLength,
  validateUsernameLength,
} from './user-validations';
import validateProfilePictureCreation from '../../profile-picture-entity/validations/create-profile-picture-validations';

const validateUserSignup = (payload: CreateUserWithFile) => {
  const isNameLengthValid = validateNameLength(payload.name);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isEmailLengthValid = validateEmailLength(payload.email);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;

  const isPasswordLengthValid = validatePasswordLength(payload.password);
  if (!isPasswordLengthValid) throw InvalidPasswordLengthError;

  validateProfilePictureCreation(payload.profilePictureFile);
};

export default validateUserSignup;
