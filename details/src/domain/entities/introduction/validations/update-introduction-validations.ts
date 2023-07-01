import {
  UpdateIntroductionEntity,
} from '../introduction-entity';
import {
  InvalidIntroductionTitleLengthError,
  InvalidIntroductionDescriptionLengthError,
} from '../introduction-errors';
import {
  validateIntroductionTitle,
  validateIntroductionDescription,
} from './introduction-validations';
import {
  InvalidUsernameNameLengthError,
} from '../../../errors/user-error';
import validateUsernameLength from '../../user/validations/user-validations';

const validateIntroductionUpdate = (payload: UpdateIntroductionEntity) => {
  const isDescriptionLengthValid = validateIntroductionDescription(payload.description);
  if (!isDescriptionLengthValid) throw InvalidIntroductionDescriptionLengthError;

  const isTitleLengthValid = validateIntroductionTitle(payload.title);
  if (!isTitleLengthValid) throw InvalidIntroductionTitleLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateIntroductionUpdate;
