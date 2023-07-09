export type Answer = Readonly<{
  answer: string;
  answeredAt: Date;
}>;

export type AnswerPayload = Pick<Answer, 'answer'>;

export type CreateAnswer = AnswerPayload;

export type UpdateAnswer = AnswerPayload;
