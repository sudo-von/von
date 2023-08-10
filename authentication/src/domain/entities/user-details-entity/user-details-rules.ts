const userDetailsRules = {
  interest: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 250,
  },
  position: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 250,
  },
  quote: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 250,
  },
} as const;

export default userDetailsRules;
