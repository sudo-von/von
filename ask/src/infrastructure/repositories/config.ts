import InMemoryProfileRepository from './profile-repository/in-memory-profile-repository';
import InMemoryQuestionRepository from './question-repository/in-memory-question-repository';

const configureRepositories = () => {
  const profileRepository = new InMemoryProfileRepository();
  const questionRepository = new InMemoryQuestionRepository();
  return { profileRepository, questionRepository };
};

export default configureRepositories;
