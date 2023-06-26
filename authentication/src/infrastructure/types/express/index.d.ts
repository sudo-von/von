import {
  TokenUserDto,
} from '../../services/token-service/dtos/token-user-dto';

declare global {
  namespace Express {
    interface Request {
      user?: TokenUserDto
    }
  }
}
