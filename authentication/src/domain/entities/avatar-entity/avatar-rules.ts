const avatarRules = {
  size: {
    MIN_BYTES: 10_000,
    MAX_BYTES: 5_000_000,
  },
  mimetype: {
    ALLOWED_MIMETYPES: ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'],
  },
};

export default avatarRules;
