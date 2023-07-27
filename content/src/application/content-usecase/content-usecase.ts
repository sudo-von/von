import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  ContentNotFoundError,
} from '../../domain/entities/content-entity/content-errors';
import {
  CreateVideoContent,
  DetailedContent,
} from '../../domain/entities/content-entity/content-entities';
import ContentUsecase from '../../domain/usecases/content-usecase/content-usecase';
import validateVideoContentCreation from '../../domain/entities/content-entity/content-validations/create-video-content-validations';

class ContentUsecaseApplication extends ContentUsecase {
  getContentById = async (
    id: string,
  ): Promise<DetailedContent> => {
    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    return content;
  };

  getContentsByUsername = async (
    username: string,
  ): Promise<DetailedContent[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const contents = await this.contentRepository.getContents({ username });
    return contents;
  };
}

export default ContentUsecaseApplication;
