import {
  UpdateTechnologyEntity,
} from '../technology-entity';
import {
  InvalidTechnologyTitleLengthError,
  InvalidTechnologyDescriptionLengthError,
} from '../technology-errors';
import {
  validateTechnologyTitle,
  validateTechnologyDescription,
} from './technology-validations';
import {
  InvalidUsernameNameLengthError,
} from '../../../errors/user-error';
import validateUsernameLength from '../../user/validations/user-validations';

const validateTechnologyUpdate = (payload: UpdateTechnologyEntity) => {
  const isDescriptionLengthValid = validateTechnologyDescription(payload.description);
  if (!isDescriptionLengthValid) throw InvalidTechnologyDescriptionLengthError;

  const isTitleLengthValid = validateTechnologyTitle(payload.title);
  if (!isTitleLengthValid) throw InvalidTechnologyTitleLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateTechnologyUpdate;
