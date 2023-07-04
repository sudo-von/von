const profilePictureRules = {
  name: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 60,
  },
  size: {
    MAX_SIZE_BYTES: 5_000_000,
  },
  mimetype: {
    ALLOWED_MIMETYPES: ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'],
  },
} as const;

export default profilePictureRules;
