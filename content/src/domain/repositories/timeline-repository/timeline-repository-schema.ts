export type TimelineRepositorySchemaCollection = {
  type: 'timeline-collection';
  timelines: TimelineRepositorySchema[];
};

export type TimelineRepositorySchema = {
  title: string;
  end_date: Date;
  start_date: Date;
  filename: string;
  description: string;
};
