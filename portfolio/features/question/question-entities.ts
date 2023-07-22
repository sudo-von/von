export type CreateQuestion = {
  question: string;
};

export type AnsweredQuestionEntity = {
  id: string;
  answer: string;
  question: string;
  answeredAt: Date;
};