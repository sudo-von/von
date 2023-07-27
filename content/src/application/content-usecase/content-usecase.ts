import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  ContentNotFoundError,
  ContentUpdateFailedError,
} from '../../domain/entities/content-entity/content-errors';
import {
  DetailedContent,
  UpdateDetailedContent,
} from '../../domain/entities/content-entity/content-entities';
import ContentUsecase from '../../domain/usecases/content-usecase/content-usecase';
import validateContentUpdate from '../../domain/entities/content-entity/content-validations/update-content-validations';

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

  updateContentById = async (
    id: string,
    payload: UpdateDetailedContent,
  ): Promise<DetailedContent> => {
    validateContentUpdate(payload);

    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    const updatedContent = await this.contentRepository.updateContent({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
    }, { id });
    if (!updatedContent) throw ContentUpdateFailedError;

    return updatedContent;
  };

  deleteContentById = async (
    id: string,
  ): Promise<void> => {
    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    await this.contentRepository.deleteContentById(id);
  };
}

export default ContentUsecaseApplication;
