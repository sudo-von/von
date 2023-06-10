import express from 'express';
import ApplicationService from '../application-service';
import AuthUsecase from '../../domain/usecase/auth-usecase';
import AuthControllerImpl from '../controllers/auth-controller-impl';
import errorHandler from '../controllers/middlewares/error-handler';

class APIServiceImpl extends ApplicationService {
  private app = express();

  private router = express.Router();

  constructor(
    protected authUsecase: AuthUsecase,
    private port: number,
  ) {
    super(authUsecase);
  }

  start = () => {
    this.setupHandlers();
    this.setupAPI();
  };

  setupHandlers = () => {
    const userControllerImpl = new AuthControllerImpl(this.authUsecase);
    this.router.post('/authenticate', userControllerImpl.auth);
    this.router.post('/signup', userControllerImpl.signup);
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
