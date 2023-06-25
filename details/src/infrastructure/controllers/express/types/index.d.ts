import { ControllerUserDto } from '../../dtos/controller-user-dto';

declare global {
  namespace Express {
    interface Request {
      user?: ControllerUserDto
    }
  }
}
