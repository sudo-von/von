import {
  Question,
  QuestionPayload,
} from '../entities/question/question-entities';

interface IQuestionRepositoryReader {
  getQuestionsByUsername: (username: string) => Promise<Question[]>;
  getAnsweredQuestionById: (id: string) => Promise<Question | null>;
  getAnsweredQuestionsByUsername: (username: string) => Promise<Question[]>;
  getUnansweredQuestionsByUsername: (username: string) => Promise<Question[]>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (payload: QuestionPayload) => Promise<Question>;
  updateQuestionById: (id: string, payload: QuestionPayload) => Promise<Question | null>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
