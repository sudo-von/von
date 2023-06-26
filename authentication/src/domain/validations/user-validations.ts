export const userRules = {
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
  profilePicture: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 60,
  },
} as const;

export const validateNameLength = (name: string) => {
  const nameLength = name.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.name;
  return nameLength >= MIN_LENGTH && nameLength <= MAX_LENGTH;
};

export const validateUsernameLength = (username: string) => {
  const usernameLength = username.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.username;
  return usernameLength >= MIN_LENGTH && usernameLength <= MAX_LENGTH;
};

export const validatePasswordLength = (password: string) => {
  const nameLength = password.trim().length;
  const { MIN_LENGTH } = userRules.password;
  return nameLength >= MIN_LENGTH;
};

export const validateProfilePictureLength = (profilePicture: string) => {
  const profilePictureLength = profilePicture.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userRules.profilePicture;
  return profilePictureLength >= MIN_LENGTH && profilePictureLength <= MAX_LENGTH;
};
