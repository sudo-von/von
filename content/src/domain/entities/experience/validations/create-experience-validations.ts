import {
  CreateExperienceEntity,
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
} from '../../user/user-errors';
import validateUsernameLength from '../../user/validations/user-validations';

const validateExperienceCreation = (payload: CreateExperienceEntity) => {
  const isTitleLengthValid = validateExperienceTitle(payload.title);
  if (!isTitleLengthValid) throw InvalidExperienceTitleLengthError;

  const isDescriptionLengthValid = validateExperienceDescription(payload.description);
  if (!isDescriptionLengthValid) throw InvalidExperienceDescriptionLengthError;

  const isUsernameLengthValid = validateUsernameLength(payload.username);
  if (!isUsernameLengthValid) throw InvalidUsernameNameLengthError;
};

export default validateExperienceCreation;
