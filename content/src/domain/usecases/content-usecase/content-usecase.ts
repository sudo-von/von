import IUserRepository from '../../repositories/user-repository/user-repository';
import IContentRepository from '../../repositories/content-repository/content-repository';
import { CreateVideoContent, DetailedContent } from '../../entities/content-entity/content-entities';

abstract class ContentUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly contentRepository: IContentRepository,
  ) {}

  abstract getContentById: (id: string)
  => Promise<DetailedContent>;

  abstract getContentsByUsername: (username: string)
  => Promise<DetailedContent[]>;
}

export default ContentUsecase;
