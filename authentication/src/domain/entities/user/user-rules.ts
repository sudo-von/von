const userRules = {
  name: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 30,
  },
  username: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 12,
  },
  password: {
    MIN_LENGTH: 10,
  },
  profilePicture: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 60,
  },
} as const;

export default userRules;
