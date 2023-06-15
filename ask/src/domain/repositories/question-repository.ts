import { CreateQuestionEntity, DetailedQuestionEntity, QuestionEntity } from '../entities/question-entity';

interface IQuestionRepositoryReader {
  getAnsweredQuestionById: (id: string) => Promise<QuestionEntity | null>
  getAllQuestionsByUser: (username: string) => Promise<DetailedQuestionEntity[]>;
  getAnsweredQuestionsByUser: (username: string) => Promise<DetailedQuestionEntity[]>;
  getUnansweredQuestionsByUser: (username: string) => Promise<DetailedQuestionEntity[]>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (questionPayload: CreateQuestionEntity) => Promise<DetailedQuestionEntity | null>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
