const userRules = {
  email: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 250,
    REG_EXP: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  name: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 30,
    REG_EXP: /^[a-zA-Z]+$/,
  },
  password: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 80,
  },
  username: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 12,
    REG_EXP: /^[a-zA-Z0-9_-]+$/,
  },
};

export default userRules;
