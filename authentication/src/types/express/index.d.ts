import { SmallUserEntity } from '../../domain/entities/user-entity';

declare global {
  namespace Express {
    interface Request {
      user?: SmallUserEntity
    }
  }
}
