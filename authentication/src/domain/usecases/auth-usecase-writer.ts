import { CreateUserEntity, SmallUserEntity } from '../entities/user-entity';

interface IAuthUsecaseWriter {
  signup: (userPayload: CreateUserEntity) => Promise<SmallUserEntity>;
}

export default IAuthUsecaseWriter;
