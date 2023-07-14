import {
  InvalidProfilePictureSizeError,
  InvalidProfilePictureMimeTypeError,
  InvalidProfilePictureNameLengthError,
} from '../profile-picture-errors';
import {
  CreateAvatar,
} from '../profile-picture-entities';
import {
  validateProfilePictureSize,
  validateProfilePictureMimetype,
  validateProfilePictureNameLength,
} from './profile-picture-validations';

const validateProfilePictureCreation = (payload: CreateAvatar) => {
  const isProfilePictureNameLengthValid = validateProfilePictureNameLength(payload.name);
  if (!isProfilePictureNameLengthValid) throw InvalidProfilePictureNameLengthError;

  const isProfilePictureSizeValid = validateProfilePictureSize(payload.size);
  if (!isProfilePictureSizeValid) throw InvalidProfilePictureSizeError;

  const isProfilePictureMimetypeValid = validateProfilePictureMimetype(payload.mimetype);
  if (!isProfilePictureMimetypeValid) throw InvalidProfilePictureMimeTypeError;
};

export default validateProfilePictureCreation;
