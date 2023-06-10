import express from 'express';
import AuthUsecase from '../../domain/usecases/auth-usecase';
import AuthControllerImpl from '../controllers/auth-controller-impl';
import errorHandler from '../controllers/middlewares/error-handler';
import exceptionHandler from '../controllers/middlewares/exception-handler';

class APIServiceImpl {
  private app = express();

  private router = express.Router();

  constructor(
    protected authUsecase: AuthUsecase,
    private port: number,
  ) {}

  start = () => {
    this.setupHandlers();
    this.setupAPI();
  };

  setupHandlers = () => {
    const userControllerImpl = new AuthControllerImpl(this.authUsecase);
    this.router.post('/authenticate', userControllerImpl.auth);
    this.router.post('/signup', userControllerImpl.signup);
    this.router.use(exceptionHandler);
    this.router.use(errorHandler);
  };

  setupAPI = () => {
    this.app.use(express.json());
    this.app.use('/v1/auth', this.router);
    this.app.listen(this.port, () => {
      console.log(`💻 [APIServiceImpl][start]: Starting application on port ${this.port}.`);
    });
  };
}

export default APIServiceImpl;
