import UserUsecaseApplication from '../../application/user-usecase';
import AnswerUsecaseApplication from '../../application/answer-usecase';
import MetricUsecaseApplication from '../../application/metric-usecase';
import QuestionUsecaseApplication from '../../application/question-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import IQuestionRepository from '../../domain/repositories/question-repository/question-repository';
import AnsweredQuestionUsecaseApplication from '../../application/answered-question-usecase';
import UnansweredQuestionUsecaseApplication from '../../application/unanswered-question-usecase';

const configureUsecases = (
  userRepository: IUserRepository,
  questionRepository: IQuestionRepository,
) => {
  const userUsecase = new UserUsecaseApplication(
    userRepository,
    questionRepository,
  );

  const answerUsecase = new AnswerUsecaseApplication(
    userRepository,
    questionRepository,
  );

  const metricUsecase = new MetricUsecaseApplication(
    userRepository,
  );

  const questionUsecase = new QuestionUsecaseApplication(
    userRepository,
    questionRepository,
  );

  const answeredQuestionUsecase = new AnsweredQuestionUsecaseApplication(
    userRepository,
    questionRepository,
  );

  const unansweredQuestionUsecase = new UnansweredQuestionUsecaseApplication(
    userRepository,
    questionRepository,
  );

  return {
    userUsecase,
    answerUsecase,
    metricUsecase,
    questionUsecase,
    answeredQuestionUsecase,
    unansweredQuestionUsecase,
  };
};

export default configureUsecases;
