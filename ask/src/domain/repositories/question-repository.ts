import {
  CreateQuestionEntity, QuestionEntity, UpdateQuestionEntity,
} from '../entities/question-entity';

interface IQuestionRepositoryReader {
  getAnsweredQuestionById: (id: string) => Promise<QuestionEntity | null>
  getAllQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;
  getAnsweredQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;
  getUnansweredQuestionsByUser: (username: string) => Promise<QuestionEntity[]>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (questionPayload: CreateQuestionEntity) => Promise<QuestionEntity | null>;
  updateQuestionById: (id: string, questionPayload: UpdateQuestionEntity) => Promise<void>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
