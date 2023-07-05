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
import validateProfilePictureCreation from '../../profile-picture/validations/create-profile-picture-validations';

const validateUserCreation = (payload: CreateUser) => {
  const isNameLengthValid = validateNameLength(payload.name);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isEmailLengthValid = validateEmailLength(payload.email);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;

  const isPasswordLengthValid = validatePasswordLength(payload.password);
  if (!isPasswordLengthValid) throw InvalidPasswordLengthError;

  validateProfilePictureCreation(payload.profilePicture);
};

export default validateUserCreation;
