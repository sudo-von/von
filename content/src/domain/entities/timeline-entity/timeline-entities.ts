export type TimelineCollection = Timeline[];

export type Timeline = {
  title: string;
  endDate: Date;
  startDate: Date;
  filename: string;
  description: string;
};

export type TimelineFile = Readonly<Omit<Timeline, 'filename'> & {
  size: number;
  buffer: Buffer;
  mimetype: string;
}>;

export type CreateTimelineFile = TimelineFile;

export type UpdateTimelineFile = TimelineFile;
