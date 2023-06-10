import { CreateAboutEntity } from '../../../domain/entities/about-entity';
import { UserEntity } from '../../../domain/entities/user-entity';

type CreateUserDto = Readonly<
Omit<UserEntity, 'id'> & {
  about: CreateAboutEntity;
}>;

export default CreateUserDto;
