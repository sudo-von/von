const userRules = {
  email: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 250,
  },
  name: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 30,
  },
  password: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 80,
  },
  username: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 12,
  },
};

export default userRules;
