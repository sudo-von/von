export type DetailedMetrics = Readonly<{
  totalViews: number;
  totalAnswers: number;
  totalQuestions: number;
}>;

export type Metrics = Pick<DetailedMetrics, 'totalViews'>;

export type CreateMetrics = Metrics;

export type UpdateMetrics = Metrics;
