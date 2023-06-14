import InMemoryProfileRepository from './profile-repository/in-memory-profile-repository';
import InMemoryQuestionRepository from './question-repository/in-memory-question-repository';

const configureRepositories = () => {
  const inMemoryProfileRepository = new InMemoryProfileRepository();
  const inMemoryQuestionRepository = new InMemoryQuestionRepository();
  return { inMemoryProfileRepository, inMemoryQuestionRepository };
};

export default configureRepositories;
