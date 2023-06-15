import { CreateQuestionEntity, QuestionEntity } from '../entities/question-entity';

interface IQuestionRepositoryReader {
  getQuestionsByUsername: (username: string) => Promise<QuestionEntity[]>;
  getAnswersByUsername: (username: string) => Promise<QuestionEntity[]>;
}

interface IQuestionRepositoryWriter {
  createQuestion: (questionPayload: CreateQuestionEntity) => Promise<QuestionEntity | null>;
}

interface IQuestionRepository extends IQuestionRepositoryReader, IQuestionRepositoryWriter {}

export default IQuestionRepository;
