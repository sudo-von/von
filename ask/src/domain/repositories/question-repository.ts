import {
  Question,
  CreateQuestion,
} from '../entities/question/question-entities';

interface IQuestionRepositoryWriter {
  createQuestion: (payload: CreateQuestion) => Promise<Question>;
}

interface IQuestionRepository extends IQuestionRepositoryWriter {}

export default IQuestionRepository;
