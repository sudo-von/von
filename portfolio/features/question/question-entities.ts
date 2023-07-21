import {
  DetailedAnswer,
} from '../answer/entities/answer-entities';

export type DetailedAnsweredQuestion = Readonly<{
  id: string;
  views: number;
  askedAt: Date;
  askedBy: string;
  username: string;
  question: string;
  answer: DetailedAnswer;
}>;

export type BasicAnsweredQuestion = Readonly<
Pick<DetailedAnsweredQuestion, 'id' | 'question'> & 
Pick<DetailedAnsweredQuestion['answer'], 'answer' | 'answeredAt'>
>