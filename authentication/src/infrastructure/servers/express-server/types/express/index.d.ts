import {
  UserToken,
} from '../../../../services/token-service/dtos/user-dto/user-token-dtos';

declare global {
  namespace Express {
    interface Request {
      user?: UserToken
    }
  }
}
