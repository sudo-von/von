const experienceRules = {
  description: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 450,
  },
  title: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 100,
  },
} as const;

export default experienceRules;
