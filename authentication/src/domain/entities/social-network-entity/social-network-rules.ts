const avatarRules = {
  mimetype: {
    ALLOWED_MIMETYPES: ['image/svg+xml'],
  },
  size: {
    MIN_BYTES: 1_000,
    MAX_BYTES: 5_000_000,
  },
};

export default avatarRules;
