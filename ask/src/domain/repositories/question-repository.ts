import {
  Question,
  QuestionPayload,
} from '../entities/question/question-entities';

export type QuestionFilters = {
  id?: string;
  username?: string;
  isDeleted?: boolean;
  status: 'answered' | 'unanswered' | 'both';
};

interface IQuestionRepositoryReader {
  getQuestion: (filters: QuestionFilters) => Promise<Question | null>;
  getQuestions: (filters: QuestionFilters) => Promise<Question[]>;
}

interface IQuestionRepositoryWriter {
  deleteQuestionById: (id: string) => Promise<Question | null>;
  createQuestion: (payload: QuestionPayload) => Promise<Question>;
  updateQuestionById: (id: string, payload: QuestionPayload) => Promise<Question | null>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
