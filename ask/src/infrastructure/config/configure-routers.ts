import TokenService from '../services/token-service/token-service';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import AnswerUsecase from '../../domain/usecases/answer-usecase/answer-usecase';
import MetricUsecase from '../../domain/usecases/metric-usecase/metric-usecase';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import configureUserRouter from '../servers/express-server/controllers/user-controller/user-router';
import authenticationMiddleware from '../servers/express-server/middlewares/authentication-middleware';
import configureAnswerRouter from '../servers/express-server/controllers/answer-controller/answer-router';
import configureQuestionRouter from '../servers/express-server/controllers/question-controller/question-router';
import AnsweredQuestionUsecase from '../../domain/usecases/answered-question-usecase/answered-question-usecase';
import UnansweredQuestionUsecase from '../../domain/usecases/unanswered-question-usecase/unanswered-question-usecase';
import configureAnsweredQuestionRouter from '../servers/express-server/controllers/answered-question-controller/answered-question-router';
import configureUnansweredQuestionRouter from '../servers/express-server/controllers/unanswered-question-controller/unanswered-question-router';

const configureRouters = (
  userUsecase: UserUsecase,
  answerUsecase: AnswerUsecase,
  metricUsecase: MetricUsecase,
  questionUsecase: QuestionUsecase,
  answeredQuestionUsecase: AnsweredQuestionUsecase,
  unansweredQuestionUsecase: UnansweredQuestionUsecase,
  tokenService: TokenService,
  userRepository: IUserRepository,
) => {
  const authenticationHandler = authenticationMiddleware(
    tokenService,
    userRepository,
  );

  const userRouter = configureUserRouter(userUsecase);

  const answerRouter = configureAnswerRouter(
    answerUsecase,
    authenticationHandler,
  );

  const questionRouter = configureQuestionRouter(
    questionUsecase,
    authenticationHandler,
  );

  const answeredQuestionRouter = configureAnsweredQuestionRouter(
    metricUsecase,
    answeredQuestionUsecase,
  );

  const unansweredQuestionRouter = configureUnansweredQuestionRouter(
    authenticationHandler,
    unansweredQuestionUsecase,
  );

  return {
    userRouter,
    answerRouter,
    questionRouter,
    answeredQuestionRouter,
    unansweredQuestionRouter,
  };
};

export default configureRouters;
