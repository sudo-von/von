export type BasicMetrics = {
  totalViews: number;
};

export type DetailedMetrics = BasicMetrics & {
  totalAnswers: number;
  totalQuestions: number;
};
