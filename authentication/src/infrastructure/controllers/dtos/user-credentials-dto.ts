import { UserEntity } from '../../../domain/entities/user-entity';

type UserCredentialsDto = Pick<UserEntity, 'email' | 'password'>;

export default UserCredentialsDto;
