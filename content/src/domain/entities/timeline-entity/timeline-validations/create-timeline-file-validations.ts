import {
  InvalidTimelineDateError,
  InvalidTimelineFileSizeError,
  InvalidTimelineTitleLengthError,
  InvalidTimelineFileMimeTypeError,
  InvalidTimelineDescriptionLengthError,
} from '../timeline-errors';
import {
  CreateTimelineFile,
} from '../timeline-entities';
import {
  validateTimelineDate,
  validateTimelineFileSize,
  validateTimelineTitleLength,
  validateTimelineFileMimetype,
  validateTimelineDescriptionLength,
} from './timeline-validations';

const validateTimelineFileCreation = (payload: CreateTimelineFile) => {
  const areDateValid = validateTimelineDate(payload.startDate, payload.endDate);
  if (!areDateValid) throw InvalidTimelineDateError;

  const isDescriptionLengthValid = validateTimelineDescriptionLength(payload.description);
  if (!isDescriptionLengthValid) throw InvalidTimelineDescriptionLengthError;

  const isFileMimetypeValid = validateTimelineFileMimetype(payload.mimetype);
  if (!isFileMimetypeValid) throw InvalidTimelineFileMimeTypeError;

  const isFileSizeValid = validateTimelineFileSize(payload.size);
  if (!isFileSizeValid) throw InvalidTimelineFileSizeError;

  const isTitleLengthValid = validateTimelineTitleLength(payload.title);
  if (!isTitleLengthValid) throw InvalidTimelineTitleLengthError;
};

export default validateTimelineFileCreation;
