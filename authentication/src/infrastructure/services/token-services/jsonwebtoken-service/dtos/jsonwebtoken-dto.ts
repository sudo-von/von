import { SmallUserEntity } from '../../../../../domain/entities/user-entity';

type JSONWebTokenDto = Readonly<SmallUserEntity & {
  iat: number;
  exp: number;
}>;

export default JSONWebTokenDto;
