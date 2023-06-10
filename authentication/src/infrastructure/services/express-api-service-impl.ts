import express from 'express';
import apiConfig from '../config/api-config';
import AbstractApplication from '../../domain/services/application-service';
import createUserRouter from '../controllers/express/user-router';

class ExpressAPIServiceImpl extends AbstractApplication {
  private port = apiConfig.port;

  start = (): void => {
    /* 📡 Routers. */
    const userRouter = createUserRouter(this.userUsecase);
    /* 🖥️ Middlewares. */
    const app = express();
    app.use(express.json());
    app.use('/user', userRouter);
    app.listen(this.port, () => {
      console.log(`💻 [ExpressAPIServiceImpl][start]: Starting application on port ${this.port}.`);
    });
  };
}

export default ExpressAPIServiceImpl;
