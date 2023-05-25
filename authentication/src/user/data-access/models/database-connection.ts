import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './user-model';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'movies',
  storage: ':memory:',
  models: [UserModel],
  logging: false
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    console.log('📃 Connecting to the database...');
    await sequelize.authenticate();
    console.log('📃 The authentication was successful...');
    await sequelize.sync();
  } catch (e) {
    throw new Error(`🔥 There was an error: ${(e as Error).message}`);
  }
};
