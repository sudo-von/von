import express from 'express';
import AuthUsecase from '../../domain/usecases/auth-usecase';
import AuthControllerImpl from '../controllers/auth-controller-impl';
import errorHandler from '../controllers/middlewares/error-handler';
import exceptionHandler from '../controllers/middlewares/exception-handler';
import LoggerService from '../../domain/services/logger-service';

class APIServiceImpl {
  private app = express();

  private router = express.Router();

  constructor(
    protected authUsecase: AuthUsecase,
    protected logger: LoggerService,
    private port: number,
  ) {}

  start = () => {
    this.setupHandlers();
    this.setupAPI();
    this.listen();
  };

  private setupHandlers = () => {
    const authController = new AuthControllerImpl(this.authUsecase, this.logger);
    this.router.post('/authenticate', authController.auth);
    this.router.post('/signup', authController.signup);
    this.router.use(exceptionHandler);
    this.router.use(errorHandler);
  };

  private setupAPI = () => {
    this.app.use(express.json());
    this.app.use('/v1/auth', this.router);
  };

  private listen = () => {
    this.app.listen(this.port, () => {
      this.logger.log('info', `💻 [APIServiceImpl][start]: Starting application on port ${this.port}.`);
    });
  };
}

export default APIServiceImpl;
