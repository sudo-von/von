import { User } from '../../services/token-service/token-service';

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}
