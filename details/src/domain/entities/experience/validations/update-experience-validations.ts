import {
  UpdateExperienceEntity,
} from '../experience-entity';
import {
  InvalidExperienceTitleLengthError,
  InvalidExperienceDescriptionLengthError,
} from '../experience-errors';
import {
  validateExperienceTitle,
  validateExperienceDescription,
} from './experience-validations';
import {
  InvalidUsernameNameLengthError,
} from '../../../errors/user-error';
import validateUsernameLength from '../../user/validations/user-validations';

const validateExperienceUpdate = (payload: UpdateExperienceEntity) => {
  const isDescriptionLengthValid = validateExperienceDescription(payload.description);
  if (!isDescriptionLengthValid) throw InvalidExperienceDescriptionLengthError;

  const isTitleLengthValid = validateExperienceTitle(payload.title);
  if (!isTitleLengthValid) throw InvalidExperienceTitleLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateExperienceUpdate;
