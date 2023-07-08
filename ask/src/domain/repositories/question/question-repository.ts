import {
  QuestionFilters,
} from './question-filters';
import {
  Question,
  QuestionPayload,
} from '../../entities/question/question-entities';

interface IQuestionRepositoryReader {
  getQuestions: (filters?: QuestionFilters) => Promise<Question[]>;
  getQuestion: (filters?: QuestionFilters) => Promise<Question | null>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (payload: QuestionPayload) => Promise<Question>;
  deleteQuestion: (filters?: QuestionFilters) => Promise<Question | null>;
  updateQuestion: (payload: QuestionPayload, filters?: QuestionFilters) => Promise<Question | null>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
