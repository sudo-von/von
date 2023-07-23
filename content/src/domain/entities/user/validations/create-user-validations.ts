import {
  CreateUserEntity,
} from '../user-entity';
import {
  InvalidUsernameNameLengthError,
} from '../user-errors';
import validateUsernameLength from './user-validations';

const validateUserCreation = (payload: CreateUserEntity) => {
  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateUserCreation;
