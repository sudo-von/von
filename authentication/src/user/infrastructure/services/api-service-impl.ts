import express from 'express';
import createUserRouter from '../routers/user-router';
import apiConfig from '../config/api-config';
import AbstractApplication from '../../domain/services/application-service';

class APIServiceImpl extends AbstractApplication {
  private port = apiConfig.port;

  start = (): void => {
    /* 📡 Routers. */
    const userRouter = createUserRouter(this.userUsecase);
    /* 🖥️ Middlewares. */
    const app = express();
    app.use(express.json());
    app.use('/user', userRouter);
    app.listen(this.port, () => {
      console.log(`💻 [APIServiceImpl][start]: Starting application on port ${this.port}.`);
    });
  };
}

export default APIServiceImpl;
