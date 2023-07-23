import 'express-async-errors';
import express from 'express';
import LoggerService from '../services/logger-service/logger-service';
import errorMiddleware from '../servers/express-server/middlewares/error-middleware';

const configureServer = (
  serverPort: number,
  loggerService: LoggerService,
) => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(errorMiddleware(loggerService));

  app.listen(serverPort, () => {
    loggerService.info(`🚀 Server has been configured on port ${serverPort}.`);
  });
};

export default configureServer;