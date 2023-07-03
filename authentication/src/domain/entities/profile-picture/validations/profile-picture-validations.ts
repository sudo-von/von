import profilePictureRules from '../profile-picture-rules';

export const validateProfilePictureMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = profilePictureRules.mimetype;
  return ALLOWED_MIMETYPES.includes(mimetype);
};

export const validateProfilePictureNameLength = (name: string) => {
  const nameLength = name.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = profilePictureRules.name;
  return nameLength >= MIN_LENGTH && nameLength <= MAX_LENGTH;
};

export const validateProfilePictureSize = (size: number) => {
  const { MAX_SIZE_BYTES } = profilePictureRules.size;
  return size <= MAX_SIZE_BYTES;
};
