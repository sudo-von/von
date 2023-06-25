export const userRules = {
  username: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 12,
  },
} as const;

export const validateUsername = (username: string) => {
  const usernameLength = username.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.username;
  return usernameLength >= MIN_LENGTH && usernameLength <= MAX_LENGTH;
};
