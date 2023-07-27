import {
  InvalidTitleLengthError,
  InvalidSubtitleLengthError,
  InvalidDescriptionLengthError,
} from '../content-errors';
import {
  UpdateDetailedContent,
} from '../content-entities';
import {
  validateContentTitleLength,
  validateContentSubtitleLength,
  validateContentDescriptionLength,
} from './content-validations';

const validateContentUpdate = (payload: UpdateDetailedContent) => {
  const isContentTitleValid = validateContentTitleLength(payload.title);
  if (!isContentTitleValid) throw InvalidTitleLengthError;

  const isContentSubtitleValid = validateContentSubtitleLength(payload.subtitle);
  if (!isContentSubtitleValid) throw InvalidSubtitleLengthError;

  const isContentDescriptionValid = validateContentDescriptionLength(payload.description);
  if (!isContentDescriptionValid) throw InvalidDescriptionLengthError;
};

export default validateContentUpdate;
