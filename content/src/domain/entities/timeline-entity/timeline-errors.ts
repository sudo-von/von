import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import timelineRules from './timeline-rules';

export const InvalidTimelineDateError = createDomainErrorFactory({
  code: 'INVALID_TIMELINE_DATE_LENGTH',
  message: 'The end date must be greater than the start date. Please ensure the dates are entered correctly and try again.',
});

export const InvalidTimelineDescriptionLengthError = createDomainErrorFactory({
  code: 'INVALID_TIMELINE_DESCRIPTION_LENGTH',
  message: `Please provide a description that consists of ${timelineRules.description.content.MIN_LENGTH} to ${timelineRules.description.content.MAX_LENGTH} characters.`,
});

export const InvalidTimelineFileMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_TIMELINE_FILE_MIME_TYPE',
  error: `Please provide a timeline file with one of the following MIME types: ${timelineRules.mimetype.content.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidTimelineFileSizeError = createDomainErrorFactory({
  code: 'INVALID_TIMELINE_FILE_SIZE',
  error: `Please provide a timeline file that consists of ${timelineRules.size.content.MIN_BYTES.toLocaleString()} to ${timelineRules.size.content.MAX_BYTES.toLocaleString()} bytes.`,
});

export const InvalidTimelineTitleLengthError = createDomainErrorFactory({
  code: 'INVALID_TIMELINE_TITLE_LENGTH',
  message: `Please provide a title that consists of ${timelineRules.title.content.MIN_LENGTH} to ${timelineRules.title.content.MAX_LENGTH} characters.`,
});

export const TimelineCreationFailedError = createDomainErrorFactory({
  code: 'TIMELINE_CREATION_FAILED',
  error: 'The timeline you attempted to create could not be created.',
});

export const TimelineUpdateFailedError = createDomainErrorFactory({
  code: 'TIMELINE_UPDATE_FAILED',
  error: 'The timeline you attempted to update could not be updated.',
});
