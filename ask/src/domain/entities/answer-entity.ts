export type AnswerEntity = {
  answer: string;
  answeredAt: Date;
};

export type CreateAnswerEntity = Readonly<AnswerEntity>;
