import {
  MIN_INTEREST_LENGTH,
  MAX_INTEREST_LENGTH,
  MAX_NAME_LENGTH,
  MAX_POSITION_LENGTH,
  MAX_QUOTE_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MIN_POSITION_LENGTH,
  MIN_QUOTE_LENGTH,
  MIN_USERNAME_LENGTH,
} from '../entities/validations/constants';

const errors = {
  invalidCredentials: {
    name: 'InvalidCredentialsError',
    message: 'invalid credentials',
  },
  invalidInterest: {
    name: 'InvalidInterestError',
    message: `interest must contain ${MIN_INTEREST_LENGTH} to ${MAX_INTEREST_LENGTH} characters`,
  },
  invalidEmail: {
    name: 'InvalidEmailError',
    message: 'email already exists',
  },
  invalidName: {
    name: 'InvalidNameError',
    message: `name field must contain ${MIN_NAME_LENGTH} to ${MAX_NAME_LENGTH} characters`,
  },
  invalidPassword: {
    name: 'InvalidPasswordError',
    message: `password must contain at least ${MIN_PASSWORD_LENGTH} characters`,
  },
  invalidPosition: {
    name: 'InvalidPositionError',
    message: `position must contain ${MIN_POSITION_LENGTH} to ${MAX_POSITION_LENGTH} characters`,
  },
  invalidQuote: {
    name: 'InvalidQuoteError',
    message: `quote must contain ${MIN_QUOTE_LENGTH} to ${MAX_QUOTE_LENGTH} characters`,
  },
  invalidUsername: {
    name: 'InvalidUsernameError',
    message: `username field must contain ${MIN_USERNAME_LENGTH} to ${MAX_USERNAME_LENGTH} characters`,
  },
  userCouldntBeCreated: {
    name: 'UserCouldntBeCreatedError',
    message: "user couldn't be created",
  },
  userNotFound: {
    name: 'UserNotFoundError',
    message: 'user not found',
  },
  singleUserOnly: {
    name: 'SingleUserOnlyError',
    message: 'only a single user is allowed',
  },
} as const;

export type ErrorName = typeof errors[keyof typeof errors]['name'];

export default errors;
