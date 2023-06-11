import { SmallUserEntity } from '../../../domain/entities/user-entity';

type JSONWebTokenEntity = Readonly<SmallUserEntity & {
  iat: number;
  exp: number;
}>;

export default JSONWebTokenEntity;
