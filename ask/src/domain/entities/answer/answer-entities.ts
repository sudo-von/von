export type Answer = Readonly<{
  answer: string;
  answeredAt: Date;
}>;

export type CreateAnswer = Pick<Answer, 'answer'>;

export type UpdateAnswer = Pick<Answer, 'answer'>;
