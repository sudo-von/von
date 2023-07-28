import 'express-async-errors';
import cors from 'cors';
import express, {
  Router,
} from 'express';
import path from 'path';
import LoggerService from '../services/logger-service/logger-service';
import errorMiddleware from '../servers/express-server/middlewares/error-middleware';

const configureServer = (
  serverPort: number,
  videoRouter: Router,
  vectorRouter: Router,
  loggerService: LoggerService,
) => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  const publicPath = path.resolve('public');

  app.use('/static', express.static(publicPath));
  app.use('/api/v1/video-content', videoRouter);
  app.use('/api/v1/vector-content', vectorRouter);

  app.use(errorMiddleware(loggerService));

  app.listen(serverPort, () => {
    loggerService.info(`🚀 Server has been configured on port ${serverPort}.`);
  });
};

export default configureServer;
