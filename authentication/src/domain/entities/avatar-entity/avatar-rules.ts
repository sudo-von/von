const avatarRules = {
  mimeType: {
    ALLOWED_MIME_TYPES: [
      'image/gif',
      'image/jpeg',
      'image/jpg',
      'image/png',
    ],
  },
  size: {
    MIN_BYTES: 100,
    MAX_BYTES: 1_000_000,
  },
};

export default avatarRules;
