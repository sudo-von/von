import {
  Content,
  CreateBasicContent,
  UpdateBasicContent,
} from '../../entities/content-entity/content-entities';
import IContentRepository from '../../repositories/content-repository/content-repository';
import IUserRepository from '../../repositories/user-repository/user-repository';

abstract class ContentUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly contentRepository: IContentRepository,
  ) {}

  abstract getContentById: (id: string)
  => Promise<Content>;

  abstract getContentsByUsername: (username: string)
  => Promise<Content[]>;

  abstract updateContentById: (id: string, payload: UpdateBasicContent)
  => Promise<Content>;

  abstract createContentByUsername: (username: string, payload: CreateBasicContent)
  => Promise<Content>;

  abstract updateContentMediaTypeById: (id: string, type: Content['media']['type'])
  => Promise<Content>;
}

export default ContentUsecase;
