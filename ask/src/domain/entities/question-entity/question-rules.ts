const questionRules = {
  question: {
    content: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 100,
    },
  },
} as const;

export default questionRules;
