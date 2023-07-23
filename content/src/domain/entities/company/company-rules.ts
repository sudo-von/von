const companyRules = {
  name: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 25,
  },
  position: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 35,
  },
} as const;

export default companyRules;
