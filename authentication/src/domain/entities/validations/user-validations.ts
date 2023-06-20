export const createUserRules = {
  name: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 30,
  },
  username: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 12,
  },
  password: {
    MIN_LENGTH: 10,
  },
} as const;

export const validateName = (name: string) => {
  const nameLength = name.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = createUserRules.name;
  return nameLength >= MIN_LENGTH && nameLength <= MAX_LENGTH;
};

export const validateUsername = (username: string) => {
  const usernameLength = username.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = createUserRules.username;
  return usernameLength >= MIN_LENGTH && usernameLength <= MAX_LENGTH;
};

export const validateEmail = (email: string) => email.toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

export const validatePassword = (password: string) => {
  const nameLength = password.trim().length;
  const { MIN_LENGTH } = createUserRules.password;
  return nameLength >= MIN_LENGTH;
};
