import {
  UpdateUserEntity,
} from '../user-entity';
import {
  InvalidUsernameNameLengthError,
} from '../../../errors/user-error';
import validateUsernameLength from './user-validations';

const validateUserUpdate = (payload: UpdateUserEntity) => {
  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateUserUpdate;
