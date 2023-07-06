import {
  Question,
  QuestionPayload,
} from '../entities/question/question-entities';

export type QuestionFilters = {
  status: 'answered' | 'unanswered' | 'both';
};

interface IQuestionRepositoryReader {
  getQuestionById: (id: string, filters: QuestionFilters) => Promise<Question | null>;
  getQuestionsByUsername: (username: string, filters: QuestionFilters) => Promise<Question[]>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (payload: QuestionPayload) => Promise<Question>;
  updateQuestionById: (id: string, payload: QuestionPayload) => Promise<Question | null>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
