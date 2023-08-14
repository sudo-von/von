import {
  UserToken,
} from '../../services/token-service/entities/user-token-entity/user-token-entities';

declare global {
  namespace Express {
    interface Request {
      user?: UserToken
    }
  }
}
