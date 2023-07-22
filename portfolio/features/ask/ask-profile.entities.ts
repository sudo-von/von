export type AskProfile = {
  name: string;
  avatar: string;
  position: string;
  interest: string;
  metrics: {
    totalViews: number;
    totalQuestions: number;
    totalAnswers: number;
  };
};