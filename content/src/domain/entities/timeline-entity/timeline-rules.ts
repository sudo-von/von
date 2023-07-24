const vectorRules = {
  title: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 20,
    },
  },
  description: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 20,
    },
  },
  size: {
    content: {
      MIN_BYTES: 10_000,
      MAX_BYTES: 5_000_000,
    },
  },
  mimetype: {
    content: {
      ALLOWED_MIMETYPES: ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'],
    },
  },
};

export default vectorRules;
