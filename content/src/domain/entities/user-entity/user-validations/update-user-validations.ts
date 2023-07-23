import {
  InvalidUsernameLengthError,
} from '../user-errors';
import {
  UpdateUser,
} from '../user-entities';
import validateUsernameLength from './user-validations';

const validateUserUpdate = (payload: UpdateUser) => {
  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameLengthError;
};

export default validateUserUpdate;
