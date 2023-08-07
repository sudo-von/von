const userRules = {
  name: {
    MIN_LENGTH: 3,
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
    MAX_LENGTH: 80,
  },
} as const;

export default userRules;
