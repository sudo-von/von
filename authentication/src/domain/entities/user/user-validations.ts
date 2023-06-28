import {
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
  InvalidProfilePictureLengthError,
} from '../../errors/user-error';
import {
  CreateUserEntity,
  UpdateUserEntity,
} from './user-entity';
import userRules from './user-rules';

export const validateNameLength = (name: string) => {
  const nameLength = name.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.name;
  return nameLength >= MIN_LENGTH && nameLength <= MAX_LENGTH;
};

export const validateEmailLength = (email: string) => {
  const emailLength = email.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.email;
  return emailLength >= MIN_LENGTH && emailLength <= MAX_LENGTH;
};

export const validateUsernameLength = (username: string) => {
  const usernameLength = username.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.username;
  return usernameLength >= MIN_LENGTH && usernameLength <= MAX_LENGTH;
};

export const validatePasswordLength = (password: string) => {
  const passwordLength = password.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.password;
  return passwordLength >= MIN_LENGTH && passwordLength <= MAX_LENGTH;
};

export const validateProfilePictureLength = (profilePicture: string) => {
  const profilePictureLength = profilePicture.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.profilePicture;
  return profilePictureLength >= MIN_LENGTH && profilePictureLength <= MAX_LENGTH;
};

export const validateUserSignup = (payload: CreateUserEntity) => {
  const isNameLengthValid = validateNameLength(payload.name);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isEmailLengthValid = validateEmailLength(payload.email);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;

  const isPasswordLengthValid = validatePasswordLength(payload.password);
  if (!isPasswordLengthValid) throw InvalidPasswordLengthError;

  const isProfilePictureLengthValid = validateProfilePictureLength(payload.profilePicture);
  if (!isProfilePictureLengthValid) throw InvalidProfilePictureLengthError;
};

export const validateUserUpdate = (payload: UpdateUserEntity) => {
  const isNameLengthValid = validateNameLength(payload.name);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isEmailLengthValid = validateEmailLength(payload.email);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;

  const isPasswordLengthValid = validatePasswordLength(payload.password);
  if (!isPasswordLengthValid) throw InvalidPasswordLengthError;

  const isProfilePictureLengthValid = validateProfilePictureLength(payload.profilePicture);
  if (!isProfilePictureLengthValid) throw InvalidProfilePictureLengthError;
};
