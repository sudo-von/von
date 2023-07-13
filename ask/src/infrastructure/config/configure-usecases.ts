import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import AnswerUsecaseApplication from '../../application/answer-usecase/answer-usecase';
import MetricUsecaseApplication from '../../application/metric-usecase/metric-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import QuestionUsecaseApplication from '../../application/question-usecase/question-usecase';
import IQuestionRepository from '../../domain/repositories/question-repository/question-repository';
import AnsweredQuestionUsecaseApplication from '../../application/answered-question-usecase/answered-question-usecase';
import UnansweredQuestionUsecaseApplication from '../../application/unanswered-question-usecase/unanswered-question-usecase';

const configureUsecases = (
  userRepository: IUserRepository,
  questionRepository: IQuestionRepository,
) => {
  const userUsecase = new UserUsecaseApplication(
    userRepository,
    questionRepository,
  );

  const answerUsecase = new AnswerUsecaseApplication(
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
