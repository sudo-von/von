import { EssentialUserEntity } from '../../../../../domain/entities/user-entity';

type JSONWebTokenDto = Readonly<EssentialUserEntity & {
  iat: number;
  exp: number;
}>;

export default JSONWebTokenDto;
