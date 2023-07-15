const avatarRules = {
  name: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 60,
    },
  },
  size: {
    content: {
      MIN_BYTES: 100_000,
      MAX_BYTES: 5_000_000,
    },
  },
  mimetype: {
    content: {
      ALLOWED_MIMETYPES: ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'],
    },
  },
};

export default avatarRules;
