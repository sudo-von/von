import userRules from '../user-rules';

export const validateNameLength = (name: string) => {
  const nameLength = name.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.name.content;
  return nameLength >= MIN_LENGTH && nameLength <= MAX_LENGTH;
};

export const validateEmailLength = (email: string) => {
  const emailLength = email.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.email.content;
  return emailLength >= MIN_LENGTH && emailLength <= MAX_LENGTH;
};

export const validateUsernameLength = (username: string) => {
  const usernameLength = username.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.username.content;
  return usernameLength >= MIN_LENGTH && usernameLength <= MAX_LENGTH;
};

export const validatePasswordLength = (password: string) => {
  const passwordLength = password.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.password.content;
  return passwordLength >= MIN_LENGTH && passwordLength <= MAX_LENGTH;
};
