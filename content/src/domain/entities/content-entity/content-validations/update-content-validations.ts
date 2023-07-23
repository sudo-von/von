import {
  InvalidTypeLengthError,
  InvalidTitleLengthError,
  InvalidSubtitleLengthError,
  InvalidDescriptionLengthError,
} from '../content-errors';
import {
  UpdateContent,
} from '../content-entities';
import {
  validateTypeLength,
  validateTitleLength,
  validateSubtitleLength,
  validateDescriptionLength,
} from './content-validations';

const validateContentUpdate = (payload: UpdateContent) => {
  const isTitleValid = validateTitleLength(payload.title);
  if (!isTitleValid) throw InvalidTitleLengthError;

  const isTypeValid = validateTypeLength(payload.type);
  if (!isTypeValid) throw InvalidTypeLengthError;

  const isSubtitleValid = validateSubtitleLength(payload.subtitle);
  if (!isSubtitleValid) throw InvalidSubtitleLengthError;

  const isDescriptionValid = validateDescriptionLength(payload.description);
  if (!isDescriptionValid) throw InvalidDescriptionLengthError;
};

export default validateContentUpdate;
