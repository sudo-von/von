import {
  InvalidTitleLengthError,
  InvalidSubtitleLengthError,
  InvalidDescriptionLengthError,
} from '../content-errors';
import {
  CreateVideoContent,
} from '../content-entities';
import {
  validateContentTitleLength,
  validateContentSubtitleLength,
  validateContentDescriptionLength,
} from './content-validations';
import validateVideoCreation from '../../video-entity/video-validations/create-video-validations';

const validateVideoContentCreation = (payload: CreateVideoContent) => {
  const isContentTitleValid = validateContentTitleLength(payload.title);
  if (!isContentTitleValid) throw InvalidTitleLengthError;

  const isContentSubtitleValid = validateContentSubtitleLength(payload.subtitle);
  if (!isContentSubtitleValid) throw InvalidSubtitleLengthError;

  const isContentDescriptionValid = validateContentDescriptionLength(payload.description);
  if (!isContentDescriptionValid) throw InvalidDescriptionLengthError;

  validateVideoCreation(payload.media.video);
};

export default validateVideoContentCreation;
