import { CreateQuestionEntity, DetailedQuestionEntity } from '../entities/question-entity';

interface IQuestionRepositoryReader {
  getUnansweredQuestionsByUser: (username: string) => Promise<DetailedQuestionEntity[]>;
  getAnsweredQuestionsByUser: (username: string) => Promise<DetailedQuestionEntity[]>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (questionPayload: CreateQuestionEntity) => Promise<DetailedQuestionEntity | null>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
