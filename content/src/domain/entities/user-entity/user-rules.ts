const userRules = {
  username: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 12,
    },
  },
} as const;

export default userRules;
