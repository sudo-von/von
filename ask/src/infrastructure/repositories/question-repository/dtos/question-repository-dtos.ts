import {
  AnswerRepository,
} from '../../answer-repository/dtos/answer-repository-dtos';

export type QuestionRepository = {
  views: number;
  asked_at: Date;
  asked_by: string;
  username: string;
  question: string;
  is_deleted: boolean;
  answer?: AnswerRepository;
};
