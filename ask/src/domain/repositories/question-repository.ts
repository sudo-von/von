import {
  QuestionEntity,
  CreateQuestionEntity,
  UpdateQuestionEntity,
} from '../entities/question-entity';

interface IQuestionRepositoryReader {
  getAllQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;
  getAnsweredQuestionById: (id: string) => Promise<QuestionEntity | null>;
  getAnsweredQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;
  getUnansweredQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (payload: CreateQuestionEntity) => Promise<QuestionEntity | null>;
  updateQuestionById: (id: string, payload: UpdateQuestionEntity) => Promise<void>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
