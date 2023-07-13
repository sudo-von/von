const questionRules = {
  askedBy: {
    content: {
      MIN_LENGTH: 1,
    },
  },
  question: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 100,
    },
  },
} as const;

export default questionRules;
