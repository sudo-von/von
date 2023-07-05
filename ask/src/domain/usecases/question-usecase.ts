import {
  CreateQuestion, Question,
} from '../entities/question/question-entities';
import IUserRepository from '../repositories/user-repository';
import IQuestionRepository from '../repositories/question-repository';

abstract class QuestionUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract createQuestion: (payload: CreateQuestion) => Promise<Question>;
}

export default QuestionUsecase;
