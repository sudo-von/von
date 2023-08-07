const userDetailsRules = {
  quote: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 250,
    },
  },
  interest: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 250,
    },
  },
  position: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 250,
    },
  },
} as const;

export default userDetailsRules;
