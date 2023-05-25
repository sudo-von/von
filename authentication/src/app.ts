import express from 'express';
import { initializeDatabase } from './user/data-access/models/database-connection';
import { UserRepository } from './user/data-access/user-repository';
import { UserUsecase } from './user/domain/usecase/user-usecase';
import { serverConfig } from './common/config/server-config';
import { createUserController } from './user/entry-points/api/router';

void (async () => {
  try {
    /* 💾 Database connection. */
    await initializeDatabase();

    /* 🗄️ Repositories. */
    console.log('📃 Creating repositories...');
    const userRepository = new UserRepository();

    /* 🗃️ Usecases. */
    console.log('📃 Creating usecases...');
    const userUsecase = new UserUsecase(userRepository);

    /* 🗂️ Controllers. */
    console.log('📃 Creating controllers...');
    const v1UserControllerRouter = createUserController(userUsecase);

    /* 📡 Application. */
    console.log('📃 Creating application...');
    const app = express();

    /* 🔌 Middlewares. */
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(v1UserControllerRouter);

    console.log('📃 Starting application...');
    app.listen(serverConfig.port, () => {
      console.log(`💻 Listening at port: ${serverConfig.port}...`);
    });
  } catch (e) {
    console.log(`🔥 There was an error: ${(e as Error).message}`);
  }
})();
