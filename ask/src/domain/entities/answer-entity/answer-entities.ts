export type DetailedAnswer = Readonly<{
  answer: string;
  answeredAt: Date;
}>;

export type CreateDetailedAnswer = DetailedAnswer;

export type PartialDetailedAnswer = Partial<DetailedAnswer>;

export type Answer = Pick<DetailedAnswer, 'answer'>;

export type CreateAnswer = Answer;

export type UpdateAnswer = Answer;
