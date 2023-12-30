import {
  promises,
} from 'fs';
import {
  parse,
} from 'yaml';
import cors from 'cors';
import path from 'path';
import {
  serve,
  setup,
} from 'swagger-ui-express';
import 'express-async-errors';
import express from 'express';
import LoggerService from '../services/logger-service/logger-service';
import {
  APIEnvironmentVariables,
} from './configure-environment-variables/configure-api-environment-variables';
import errorMiddleware from '../apis/express-api/middlewares/error-middleware';
import { Routers } from './configure-routers';

export type ConfigureAPI = {
  routers: Routers;
  loggerService: LoggerService;
  API_ENVIRONMENT_VARIABLES: APIEnvironmentVariables;
};

const configureAPI = async ({
  routers,
  loggerService,
  API_ENVIRONMENT_VARIABLES,
}: ConfigureAPI) => {
  const {
    userRouter,
    avatarRouter,
    userDetailsRouter,
    socialNetworkRouter,
    authenticationRouter,
  } = routers;

  const {
    API_PORT,
  } = API_ENVIRONMENT_VARIABLES;

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
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/avatar', avatarRouter);
  app.use('/api/v1/user-details', userDetailsRouter);
  app.use('/api/v1/social-network', socialNetworkRouter);
  app.use('/api/v1/authentication', authenticationRouter);

  app.use(errorMiddleware(loggerService));

  app.listen(API_PORT, () => {
    loggerService.info(`🚀 Server has been configured on port ${API_PORT}.`);
  });
};

export default configureAPI;
