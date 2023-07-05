import {
  UpdateUser,
} from '../user-entities';
import {
  InvalidUsernameLengthError,
} from '../user-errors';
import validateUsernameLength from './user-validations';

const validateUserUpdate = (payload: UpdateUser) => {
  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;
};

export default validateUserUpdate;
