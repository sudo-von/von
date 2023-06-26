import { RestrictedUserEntity } from '../../../domain/entities/user-entity';

declare global {
  namespace Express {
    interface Request {
      user?: RestrictedUserEntity
    }
  }
}
