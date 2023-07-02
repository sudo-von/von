import {
  CreateCompanyEntity,
} from '../company-entity';
import {
  InvalidCompanyNameLengthError,
  InvalidCompanyPositionLengthError,
} from '../company-errors';
import {
  validateCompanyName,
  validateCompanyPosition,
} from './company-validations';
import {
  InvalidUsernameNameLengthError,
} from '../../user/user-errors';
import validateUsernameLength from '../../user/validations/user-validations';

const validateCompanyCreation = (payload: CreateCompanyEntity) => {
  const isNameLengthValid = validateCompanyName(payload.name);
  if (!isNameLengthValid) throw InvalidCompanyNameLengthError;

  const isPositionLengthValid = validateCompanyPosition(payload.position);
  if (!isPositionLengthValid) throw InvalidCompanyPositionLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateCompanyCreation;
