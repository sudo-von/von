export type CreateQuestion = {
  question: string;
};

export type BasicAnsweredQuestion = {
  id: string;
  answer: string;
  question: string;
  answeredAt: Date;
};