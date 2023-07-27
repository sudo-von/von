import {
  DetailedContent,
  UpdateDetailedContent,
} from '../../entities/content-entity/content-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IContentRepository from '../../repositories/content-repository/content-repository';

abstract class ContentUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly contentRepository: IContentRepository,
  ) {}

  abstract getContentById: (id: string)
  => Promise<DetailedContent>;

  abstract getContentsByUsername: (username: string)
  => Promise<DetailedContent[]>;

  abstract updateContentById: (id: string, payload: UpdateDetailedContent)
  => Promise<DetailedContent>;

  abstract deleteContentById: (id: string)
  => Promise<void>;
}

export default ContentUsecase;
