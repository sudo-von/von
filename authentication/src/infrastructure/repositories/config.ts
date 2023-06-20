import InMemoryUserRepository from './user-repository/in-memory-user-repository';

const configureRepositories = () => {
  const userRepository = new InMemoryUserRepository();

  return { userRepository };
};

export default configureRepositories;
