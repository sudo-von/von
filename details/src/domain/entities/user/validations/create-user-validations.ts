import {
  CreateUserEntity,
} from '../user-entity';
import {
  InvalidUsernameNameLengthError,
} from '../../../errors/user-error';
import validateUsernameLength from './user-validations';

const validateUserCreation = (payload: CreateUserEntity) => {
  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateUserCreation;
