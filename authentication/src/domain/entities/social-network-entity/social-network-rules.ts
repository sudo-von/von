const socialNetworkRules = {
  mimetype: {
    ALLOWED_MIMETYPES: ['image/svg+xml'],
  },
  name: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 20,
  },
  size: {
    MIN_BYTES: 100,
    MAX_BYTES: 5_000_000,
  },
  url: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 250,
  },
};

export default socialNetworkRules;
