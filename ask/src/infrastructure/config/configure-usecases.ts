import UserUsecaseApplication from '../../application/user-usecase';
import IUserRepository from '../../domain/repositories/user-repository';
import QuestionUsecaseApplication from '../../application/question-usecase';
import IQuestionRepository from '../../domain/repositories/question-repository';

const configureUsecases = (
  userRepository: IUserRepository,
  questionRepository: IQuestionRepository,
) => {
  const userUsecase = new UserUsecaseApplication(userRepository);

  const questionUsecase = new QuestionUsecaseApplication(userRepository, questionRepository);

  return { userUsecase, questionUsecase };
};

export default configureUsecases;
