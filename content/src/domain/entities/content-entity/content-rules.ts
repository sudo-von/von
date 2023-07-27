const userRules = {
  title: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 90,
    },
  },
  subtitle: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 90,
    },
  },
  description: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 550,
    },
  },
} as const;

export default userRules;
