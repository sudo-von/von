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
  console.log('🚀 ~ file: create-video-content-validations.ts:17 ~ validateVideoContentCreation ~ payload:', payload);
  const isTitleValid = validateContentTitleLength(payload.title);
  if (!isTitleValid) throw InvalidTitleLengthError;

  const isSubtitleValid = validateContentSubtitleLength(payload.subtitle);
  if (!isSubtitleValid) throw InvalidSubtitleLengthError;

  const isDescriptionValid = validateContentDescriptionLength(payload.description);
  if (!isDescriptionValid) throw InvalidDescriptionLengthError;

  validateVideoCreation(payload.media.video);
};

export default validateVideoContentCreation;
