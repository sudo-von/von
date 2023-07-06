export type Answer = Readonly<{
  answer: string;
  answeredAt: Date;
}>;

export type UpdateAnswer = Pick<Answer, 'answer'>;
