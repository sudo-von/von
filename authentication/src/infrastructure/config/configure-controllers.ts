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
import bodyMiddleware from '../servers/express-server/middlewares/body-middleware';
import errorMiddleware from '../servers/express-server/middlewares/error-middleware';
import LoggerService from '../services/logger-service/logger-service';

const configureControllers = async (
  SERVER_PORT: number,
  userRouter: Router,
  authenticationRouter: Router,
  loggerService: LoggerService,
) => {
  try {
    const app = express();

    const directory = path.join('src', '..');
    const staticPath = path.join(directory, 'public');
    const swaggerPath = path.join(directory, 'swagger.yaml');

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static(staticPath));

    const swaggerFile = await promises.readFile(swaggerPath, 'utf8');
    const swaggerYaml = parse(swaggerFile);

    app.use('/api/v1/docs', serve, setup(swaggerYaml));
    app.use('/api/v1/user', userRouter);
    app.use('/api/v1/authentication', authenticationRouter);

    app.use(bodyMiddleware);
    app.use(errorMiddleware);

    app.listen(SERVER_PORT, () => {
      loggerService.info(`🚀 Controllers have been configured on port ${SERVER_PORT}.`);
    });
  } catch (e) {
    throw new Error(`An error occurred with the controllers: ${(e as Error).message}.`);
  }
};

export default configureControllers;
