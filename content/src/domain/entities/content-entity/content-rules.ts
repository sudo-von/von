const contentRules = {
  title: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 100,
    },
  },
  subtitle: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 100,
    },
  },
  description: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 600,
    },
  },
} as const;

export default contentRules;
