const userRules = {
  type: {
    content: {
      MIN_LENGTH: 4,
      MAX_LENGTH: 20,
    },
  },
  title: {
    content: {
      MIN_LENGTH: 4,
      MAX_LENGTH: 80,
    },
  },
  subtitle: {
    content: {
      MIN_LENGTH: 4,
      MAX_LENGTH: 80,
    },
  },
  description: {
    content: {
      MIN_LENGTH: 4,
      MAX_LENGTH: 500,
    },
  },
} as const;

export default userRules;
