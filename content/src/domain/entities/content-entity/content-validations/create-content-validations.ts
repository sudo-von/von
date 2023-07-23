import {
  InvalidTypeLengthError,
  InvalidTitleLengthError,
  InvalidSubtitleLengthError,
  InvalidDescriptionLengthError,
} from '../content-errors';
import {
  CreateContent,
} from '../content-entities';
import {
  validateTypeLength,
  validateTitleLength,
  validateSubtitleLength,
  validateDescriptionLength,
} from './content-validations';

const validateContentCreation = (payload: CreateContent) => {
  const isTitleValid = validateTitleLength(payload.title);
  if (!isTitleValid) throw InvalidTitleLengthError;

  const isTypeValid = validateTypeLength(payload.type);
  if (!isTypeValid) throw InvalidTypeLengthError;

  const isSubtitleValid = validateSubtitleLength(payload.subtitle);
  if (!isSubtitleValid) throw InvalidSubtitleLengthError;

  const isDescriptionValid = validateDescriptionLength(payload.description);
  if (!isDescriptionValid) throw InvalidDescriptionLengthError;
};

export default validateContentCreation;
