import express, {
  Router,
} from 'express';
import cors from 'cors';
import 'express-async-errors';
import LoggerService from '../services/logger-service/logger-service';
import errorMiddleware from '../apis/express-api/middlewares/error-middleware';

const configureServer = (
  serverPort: number,
  userRouter: Router,
  answerRouter: Router,
  questionRouter: Router,
  answeredQuestionRouter: Router,
  unansweredQuestionRouter: Router,
  loggerService: LoggerService,
) => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/v1/answer', answerRouter);
  app.use('/api/v1/answered-question', answeredQuestionRouter);
  app.use('/api/v1/question', questionRouter);
  app.use('/api/v1/unanswered-question', unansweredQuestionRouter);
  app.use('/api/v1/user', userRouter);

  app.use(errorMiddleware(loggerService));

  app.listen(serverPort, () => {
    loggerService.info(`🚀 Server has been configured on port ${serverPort}.`);
  });
};

export default configureServer;
