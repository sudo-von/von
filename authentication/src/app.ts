import express from 'express';
import { initializeDatabase } from './user/data-access/models/database-connection';
import { UserRepository } from './user/data-access/user-repository';
import { UserUsecase } from './user/domain/usecase/user-usecase';
import { serverConfig } from './common/config/server-config';
import { createUserControllerRouter } from './user/entry-points/api/router';

void (async () => {
  try {
    /* ⌛ Database connection. */
    await initializeDatabase();

    /* 🗄️ Repositories. */
    console.log('📃 Creating repositories...');
    const userRepository = new UserRepository();

    /* 🗃️ Usecases. */
    console.log('📃 Creating usecases...');
    const userUsecase = new UserUsecase(userRepository);

    /* 🔌 Middlewares. */
    const app = express();
    console.log('📃 Setting up middlewares...');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    /* 📡 Routers. */
    console.log('📃 Creating routers...');
    const v1UserControllerRouter = createUserControllerRouter(userUsecase);

    app.use(v1UserControllerRouter);
    app.listen(serverConfig.port, () => {
      console.log(`💻 Listening at port: ${serverConfig.port}...`);
    });
  } catch (e) {
    console.log(`🔥 There was an error: ${(e as Error).message}`);
  }
})();
