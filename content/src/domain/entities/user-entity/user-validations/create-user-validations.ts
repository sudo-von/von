import {
  InvalidUsernameLengthError,
} from '../user-errors';
import {
  CreateUser,
} from '../user-entities';
import validateUsernameLength from './user-validations';

const validateUserCreation = (payload: CreateUser) => {
  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;
};

export default validateUserCreation;
