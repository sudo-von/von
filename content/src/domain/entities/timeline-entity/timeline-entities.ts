export type TimelineCollection = {
  timelines: Timeline[];
  type: 'timeline-collection';
};

export type Timeline = {
  id: string;
  title: string;
  endDate: Date;
  startDate: Date;
  filename: string;
  description: string;
};

export type TimelineFile = Omit<Timeline, 'id' | 'filename'> & {
  size: number;
  buffer: Buffer;
  mimetype: string;
};

export type CreateTimelineFile = TimelineFile;

export type UpdateTimelineFile = TimelineFile;

export type CreateTimeline = Omit<Timeline, 'id'>;

export type PartialTimeline = Partial<Timeline>;
