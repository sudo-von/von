const userRules = {
  name: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 30,
    },
  },
  email: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 250,
    },
  },
  username: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 12,
    },
  },
  password: {
    content:
    {
      MIN_LENGTH: 10,
      MAX_LENGTH: 80,
    },
  },
} as const;

export default userRules;
