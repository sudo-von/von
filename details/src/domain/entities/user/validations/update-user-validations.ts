import {
  UpdateUserEntity,
} from '../user-entity';
import {
  InvalidUsernameNameLengthError,
} from '../user-errors';
import validateUsernameLength from './user-validations';

const validateUserUpdate = (payload: UpdateUserEntity) => {
  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateUserUpdate;
