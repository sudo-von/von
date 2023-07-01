import {
  UpdateAboutEntity,
} from '../about-entity';
import {
  InvalidAboutTitleLengthError,
  InvalidAboutDescriptionLengthError,
} from '../about-errors';
import {
  validateAboutTitle,
  validateAboutDescription,
} from './about-validations';
import {
  InvalidUsernameNameLengthError,
} from '../../../errors/user-error';
import validateUsernameLength from '../../user/validations/user-validations';

const validateAboutUpdate = (payload: UpdateAboutEntity) => {
  const isDescriptionLengthValid = validateAboutDescription(payload.description);
  if (!isDescriptionLengthValid) throw InvalidAboutDescriptionLengthError;

  const isTitleLengthValid = validateAboutTitle(payload.title);
  if (!isTitleLengthValid) throw InvalidAboutTitleLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateAboutUpdate;
