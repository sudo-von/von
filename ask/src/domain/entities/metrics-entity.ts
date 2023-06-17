export type MetricsEntity = {
  totalViews: number;
  totalQuestions: number;
  totalAnswers: number;
};

export type CreateMetricsEntity = Readonly<MetricsEntity>;

export type UpdateMetricsEntity = Readonly<MetricsEntity>;
