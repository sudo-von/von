export type Metrics = Readonly<{
  totalViews: number;
  totalAnswers: number;
  totalQuestions: number;
}>;

export type CreateMetrics = Pick<Metrics, 'totalViews'>;

export type UpdateMetrics = Pick<Metrics, 'totalViews'>;
