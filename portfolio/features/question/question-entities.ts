export type CreateQuestion = {
  question: string;
};

export type AnsweredQuestion = {
  id: string;
  answer: string;
  question: string;
  answeredAt: Date;
};