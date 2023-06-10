import {
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '../constants';

export const validateName = (name: string) => {
  const nameLength = name.trim().length;
  return nameLength >= MIN_NAME_LENGTH && nameLength <= MAX_NAME_LENGTH;
};

export const validateUsername = (username: string) => {
  const usernameLength = username.trim().length;
  return usernameLength >= MIN_USERNAME_LENGTH && usernameLength <= MAX_USERNAME_LENGTH;
};

export const validateEmail = (email: string) => email.toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

export const validatePassword = (password: string) => {
  const nameLength = password.trim().length;
  return nameLength >= MIN_PASSWORD_LENGTH;
};
