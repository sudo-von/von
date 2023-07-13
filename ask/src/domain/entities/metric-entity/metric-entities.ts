export type DetailedMetrics = Readonly<{
  totalViews: number;
  totalAnswers: number;
  totalQuestions: number;
}>;

export type CreateDetailedMetrics = DetailedMetrics;

export type UpdateDetailedMetrics = DetailedMetrics;

export type Metrics = Pick<DetailedMetrics, 'totalViews'>;

export type CreateMetrics = Metrics;

export type UpdateMetrics = Metrics;
