import express from 'express';
import { initializeDatabase } from './user/data-access/models/database-connection';
import { UserRepository } from './user/data-access/user-repository';
import { UserUsecase } from './user/domain/user-usecase';
import { serverConfig } from './common/config/server-config';
import { createUserControllerRouter } from './user/entry-points/api/router';

void (async () => {
  try {
    /* ⌛ Check database connection. */
    await initializeDatabase();
    /* 🗄️ Repositories. */
    const userRepository = new UserRepository();
    /* 🗃️ Usecases. */
    const userUsecase = new UserUsecase(userRepository);
    /* 🔌 Controllers. */
    const app = express();
    /* 🔌 Middlewares. */
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    /* 📡 Routers. */
    const v1UserControllerRouter = createUserControllerRouter(userUsecase);
    app.use(v1UserControllerRouter);
    app.listen(serverConfig.port, () => {
      console.log(`🖥️ Listening at port: ${serverConfig.port}`);
    });
  } catch (e) {
    console.log('🔥 There was an error:', (e as Error).message);
  }
})();
