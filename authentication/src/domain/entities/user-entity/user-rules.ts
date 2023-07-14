const userRules = {
  email: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 250,
    },
  },
  name: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 30,
    },
  },
  password: {
    content:
    {
      MIN_LENGTH: 10,
      MAX_LENGTH: 80,
    },
  },
  username: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 12,
    },
  },
} as const;

export default userRules;
