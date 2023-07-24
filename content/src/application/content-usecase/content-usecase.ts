import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  ContentNotFoundError,
  ContentUpdateFailedError,
  ContentTypeAlreadyInUseError,
} from '../../domain/entities/content-entity/content-errors';
import {
  CreateContent,
  UpdateContent,
  DetailedContent,
} from '../../domain/entities/content-entity/content-entities';
import ContentUsecase from '../../domain/usecases/content-usecase/content-usecase';
import validateContentUpdate from '../../domain/entities/content-entity/content-validations/update-content-validations';
import validateContentCreation from '../../domain/entities/content-entity/content-validations/create-content-validations';

class ContentUsecaseApplication extends ContentUsecase {
  getContent = async (
    type: string,
    username: string,
  ): Promise<DetailedContent> => {
    const content = await this.contentRepository.getContent({
      type,
      username,
    });
    if (!content) throw ContentNotFoundError;

    return content;
  };

  getContentsByUsername = async (
    username: string,
  ): Promise<DetailedContent[]> => {
    const contents = await this.contentRepository.getContents({
      username,
    });
    if (!contents) throw ContentNotFoundError;

    return contents;
  };

  createContentByUsername = async (
    username: string,
    payload: CreateContent,
  ): Promise<DetailedContent> => {
    validateContentCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const content = await this.contentRepository.getContent({ username, type: payload.type });
    if (content) throw ContentTypeAlreadyInUseError;

    const createdContent = await this.contentRepository.createContent({
      username,
      type: payload.type,
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
    });

    return createdContent;
  };

  updateContentById = async (id: string, payload: UpdateContent): Promise<DetailedContent> => {
    validateContentUpdate(payload);

    const contentFoundById = await this.contentRepository.getContent({ id });
    if (!contentFoundById) throw ContentNotFoundError;

    if (contentFoundById.type !== payload.type) {
      const contentFoundByType = await this.contentRepository.getContent({
        username: contentFoundById.username,
        type: payload.type,
      });
      if (contentFoundByType) throw ContentTypeAlreadyInUseError;
    }

    const updatedContent = await this.contentRepository.updateContent({
      type: payload.type,
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
    }, { id });
    if (!updatedContent) throw ContentUpdateFailedError;

    return updatedContent;
  };
}

export default ContentUsecaseApplication;
