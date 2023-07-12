export type DetailedAnswer = Readonly<{
  answer: string;
  answeredAt: Date;
}>;

export type CreateAnswer = Pick<DetailedAnswer, 'answer'>;

export type UpdateAnswer = Pick<DetailedAnswer, 'answer'>;
