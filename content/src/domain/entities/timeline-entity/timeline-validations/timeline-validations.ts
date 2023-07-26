import timelineRules from '../timeline-rules';

export const validateTimelineDate = (startDate: Date, endDate: Date) => {
  const startDateTime = startDate.getTime();
  const endDateTime = endDate.getTime();
  return startDateTime < endDateTime;
};

export const validateTimelineTitleLength = (title: string) => {
  const titleLength = title.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = timelineRules.title.content;
  return titleLength >= MIN_LENGTH && titleLength <= MAX_LENGTH;
};

export const validateTimelineDescriptionLength = (description: string) => {
  const descriptionLength = description.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = timelineRules.title.content;
  return descriptionLength >= MIN_LENGTH && descriptionLength <= MAX_LENGTH;
};

export const validateTimelineFileMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = timelineRules.mimetype.content;
  return ALLOWED_MIMETYPES.includes(mimetype);
};

export const validateTimelineFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = timelineRules.size.content;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};
