import {
  QuestionFilters,
} from './question-filters';
import {
  Question,
  QuestionPayload,
} from '../../entities/question/question-entities';

interface IQuestionRepositoryReader {
  getQuestions: (filters: QuestionFilters) => Promise<Question[]>;
  getQuestion: (filters: QuestionFilters) => Promise<Question | null>;
}

interface IQuestionRepositoryWriter {
  deleteQuestionById: (id: string) => Promise<Question | null>;
  createQuestion: (payload: QuestionPayload) => Promise<Question>;
  updateQuestionById: (id: string, payload: QuestionPayload) => Promise<Question | null>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
