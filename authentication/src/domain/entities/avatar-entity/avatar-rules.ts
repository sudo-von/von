const avatarRules = {
  mimetype: {
    ALLOWED_MIMETYPES: ['image/gif', 'image/jpg', 'image/jpeg', 'image/png'],
  },
  size: {
    MIN_BYTES: 100,
    MAX_BYTES: 5_000_000,
  },
};

export default avatarRules;
