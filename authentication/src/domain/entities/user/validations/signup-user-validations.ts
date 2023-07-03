import {
  CreateUserEntity,
} from '../user-entity';
import {
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
} from '../user-errors';
import {
  validateNameLength,
  validateEmailLength,
  validatePasswordLength,
  validateUsernameLength,
} from './user-validations';
import {
  InvalidProfilePictureSizeError,
  InvalidProfilePictureMimeTypeError,
  InvalidProfilePictureNameLengthError,
} from '../../profile-picture/profile-picture-errors';
import {
  validateProfilePictureSize,
  validateProfilePictureMimetype,
  validateProfilePictureNameLength,
} from '../../profile-picture/validations/profile-picture-validations';

const validateUserSignup = (payload: CreateUserEntity) => {
  const isNameLengthValid = validateNameLength(payload.name);
  if (!isNameLengthValid) throw InvalidNameLengthError;

  const isEmailLengthValid = validateEmailLength(payload.email);
  if (!isEmailLengthValid) throw InvalidEmailLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;

  const isPasswordLengthValid = validatePasswordLength(payload.password);
  if (!isPasswordLengthValid) throw InvalidPasswordLengthError;

  const isProfilePictureNameLengthValid = validateProfilePictureNameLength(
    payload.profilePicture.name,
  );
  if (!isProfilePictureNameLengthValid) throw InvalidProfilePictureNameLengthError;

  const isProfilePictureSizeValid = validateProfilePictureSize(
    payload.profilePicture.size,
  );
  if (!isProfilePictureSizeValid) throw InvalidProfilePictureSizeError;

  const isProfilePictureMimetypeValid = validateProfilePictureMimetype(
    payload.profilePicture.mimetype,
  );
  if (!isProfilePictureMimetypeValid) throw InvalidProfilePictureMimeTypeError;
};

export default validateUserSignup;
