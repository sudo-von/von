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
import bodyMiddleware from './middlewares/body-middleware';
import errorMiddleware from './middlewares/error-middleware';

const configureControllers = async (
  SERVER_PORT: number,
  userRouter: Router,
  authenticationRouter: Router,
) => {
  try {
    const app = express();
    app.use(express.json());

    const swaggerPath = path.join(__dirname, '..', '..', '..', '..', 'swagger.yaml');
    const swaggerFile = await promises.readFile(swaggerPath, 'utf8');
    const swaggerYaml = parse(swaggerFile);

    app.use('/api/v1/docs', serve, setup(swaggerYaml));
    app.use('/api/v1/user', userRouter);
    app.use('/api/v1/authentication', authenticationRouter);

    app.use(bodyMiddleware);
    app.use(errorMiddleware);

    app.listen(SERVER_PORT, () => {
      console.log(`🚀 Controllers have been configured on port ${SERVER_PORT}.`);
    });
  } catch (e) {
    throw new Error(`An error occurred with the controllers: ${(e as Error).message}.`);
  }
};

export default configureControllers;
