import cors from 'cors';
import 'express-async-errors';
import {
  promises,
} from 'fs';
import {
  parse,
} from 'yaml';
import express, {
  Router,
} from 'express';
import path from 'path';
import {
  serve,
  setup,
} from 'swagger-ui-express';
import LoggerService from '../services/logger-service/logger-service';
import errorMiddleware from '../servers/express-server/middlewares/error-middleware';

const configureServer = async (
  serverPort: number,
  userRouter: Router,
  avatarRouter: Router,
  userDetailsRouter: Router,
  authenticationRouter: Router,
  loggerService: LoggerService,
) => {
  const app = express();

  const publicPath = path.resolve('public');
  const swaggerPath = path.resolve('swagger.yaml');

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/static', express.static(publicPath));

  const swaggerFile = await promises.readFile(swaggerPath, 'utf8');
  const swaggerYaml = parse(swaggerFile);

  app.use('/api/v1/docs', serve, setup(swaggerYaml));
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/avatar', avatarRouter);
  app.use('/api/v1/user-details', userDetailsRouter);
  app.use('/api/v1/authentication', authenticationRouter);

  app.use(errorMiddleware(loggerService));

  app.listen(serverPort, () => {
    loggerService.info(`🚀 Server has been configured on port ${serverPort}.`);
  });
};

export default configureServer;
