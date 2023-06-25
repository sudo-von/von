import { ControllerUserDto } from '../../controllers/dtos/controller-user-dto';

declare global {
  namespace Express {
    interface Request {
      user?: ControllerUserDto
    }
  }
}
