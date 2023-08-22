import {
  promises,
} from 'fs';
import {
  parse,
} from 'yaml';
import express, {
  Router,
} from 'express';
import cors from 'cors';
import path from 'path';
import {
  serve,
  setup,
} from 'swagger-ui-express';
import 'express-async-errors';
import LoggerService from '../services/logger-service/logger-service';
import errorMiddleware from '../apis/express-api/middlewares/error-middleware';

const configureAPI = async (
  serverPort: number,
  userRouter: Router,
  answerRouter: Router,
  questionRouter: Router,
  answeredQuestionRouter: Router,
  unansweredQuestionRouter: Router,
  loggerService: LoggerService,
) => {
  const app = express();

  const publicPath = path.resolve('public');
  const swaggerPath = path.resolve('swagger.yaml');

  app.use(cors({
    origin: '*',
    allowedHeaders: ['Authorization', 'content-type'],
    exposedHeaders: ['Authorization'],
    methods: 'GET,PUT,PATCH,POST,DELETE',
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/static', express.static(publicPath));

  const swaggerFile = await promises.readFile(swaggerPath, 'utf8');
  const swaggerYaml = parse(swaggerFile);

  app.use('/api/v1/docs', serve, setup(swaggerYaml));
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

export default configureAPI;
