const userRules = {
  name: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 30,
  },
  email: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 250,
  },
  username: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 12,
  },
  password: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 60,
  },
  profilePicture: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 60,
  },
} as const;

export default userRules;
