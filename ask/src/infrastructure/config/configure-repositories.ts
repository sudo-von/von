import mongoose from 'mongoose';
import InMemoryProfileRepository from '../repositories/profile-repository/in-memory-profile-repository';
import InMemoryQuestionRepository from '../repositories/question-repository/in-memory-question-repository';

const configureRepositories = async (
  DATABASE_URL: string,
  DATABASE_NAME: string,
  DATABASE_USERNAME: string,
  DATABASE_PASSWORD: string,
) => {
  const profileRepository = new InMemoryProfileRepository();
  const questionRepository = new InMemoryQuestionRepository();
  return { profileRepository, questionRepository };
};

export default configureRepositories;
