const answerRules = {
  answer: {
    display: {
      MAX_LENGTH: 150,
      MIN_LENGTH: 100,
    },
    content: {
      MAX_LENGTH: 500,
      MIN_LENGTH: 2,
    },
  },
} as const;

export default answerRules;
