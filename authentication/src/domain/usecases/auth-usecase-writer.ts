import { CreateUserEntity } from '../entities/create-user-entity';
import { SmallUserEntity } from '../entities/small-user-entity';

interface IAuthUsecaseWriter {
  signup: (userPayload: CreateUserEntity) => Promise<SmallUserEntity>;
}

export default IAuthUsecaseWriter;
