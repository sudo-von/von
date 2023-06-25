import { ControllerUserDto } from '../../../controllers/dtos/controller-user-dto';

type TokenUserDto = Readonly<ControllerUserDto & {
  iat: number;
  exp: number;
}>;

export default TokenUserDto;
