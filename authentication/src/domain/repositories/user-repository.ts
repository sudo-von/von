import IUserRepositoryReader from './user-repository-reader';
import IUserRepositoryWriter from './user-repository-writer';

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
