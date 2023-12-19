const avatarRules = {
  mimetype: {
    ALLOWED_MIMETYPES: ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'],
  },
  size: {
    MIN_BYTES: 100,
    MAX_BYTES: 1_000_000,
  },
};

export default avatarRules;
