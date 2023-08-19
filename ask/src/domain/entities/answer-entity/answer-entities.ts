export type DetailedAnswer = {
  answer: string;
  answeredAt: Date;
};

export type CreateDetailedAnswer = Pick<DetailedAnswer, 'answer'>;

export type UpdateDetailedAnswer = Pick<DetailedAnswer, 'answer'>;
