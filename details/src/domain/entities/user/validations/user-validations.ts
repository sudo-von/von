import userRules from '../user-rules';

const validateUsernameLength = (username: string) => {
  const usernameLength = username.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.username;
  return usernameLength >= MIN_LENGTH && usernameLength <= MAX_LENGTH;
};

export default validateUsernameLength;
