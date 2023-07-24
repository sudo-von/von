import {
  InvalidTimelineFileSizeError,
  InvalidTimelineTitleLengthError,
  InvalidTimelineFileMimeTypeError,
  InvalidTimelineDescriptionLengthError,
} from '../timeline-errors';
import {
  CreateTimelineFile,
} from '../timeline-entities';
import {
  validateTimelineFileSize,
  validateTimelineTitleLength,
  validateTimelineFileMimetype,
  validateTimelineDescriptionLength,
} from './timeline-validations';

const validateTimelineFileCreation = (payload: CreateTimelineFile) => {
  const isTitleLengthValid = validateTimelineTitleLength(payload.title);
  if (!isTitleLengthValid) throw InvalidTimelineTitleLengthError;

  const isDescriptionLengthValid = validateTimelineDescriptionLength(payload.description);
  if (!isDescriptionLengthValid) throw InvalidTimelineDescriptionLengthError;

  const isFileSizeValid = validateTimelineFileSize(payload.size);
  if (!isFileSizeValid) throw InvalidTimelineFileSizeError;

  const isFileMimetypeValid = validateTimelineFileMimetype(payload.mimetype);
  if (!isFileMimetypeValid) throw InvalidTimelineFileMimeTypeError;
};

export default validateTimelineFileCreation;
