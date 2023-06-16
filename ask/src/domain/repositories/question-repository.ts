import {
  CreateQuestionEntity, DetailedQuestionEntity, UpdateQuestionEntity,
} from '../entities/question-entity';

interface IQuestionRepositoryReader {
  getAnsweredQuestionById: (id: string) => Promise<DetailedQuestionEntity | null>
  getAllQuestionsByUser: (username: string) => Promise<DetailedQuestionEntity[]>;
  getAnsweredQuestionsByUser: (username: string) => Promise<DetailedQuestionEntity[]>;
  getUnansweredQuestionsByUser: (username: string) => Promise<DetailedQuestionEntity[]>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (questionPayload: CreateQuestionEntity) => Promise<DetailedQuestionEntity | null>;
  updateQuestionById: (id: string, questionPayload: UpdateQuestionEntity) => Promise<void>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
