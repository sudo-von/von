import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './user-model';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'movies',
  storage: ':memory:',
  models: [UserModel]
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (e) {
    throw new Error(`There was an error ${(e as Error).message}`);
  }
};
