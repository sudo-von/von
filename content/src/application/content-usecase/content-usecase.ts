import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  CreateContent,
  UpdateContent,
  DetailedContent,
} from '../../domain/entities/content-entity/content-entities';
import {
  ContentNotFoundError,
  ContentUpdateFailedError,
  ContentTypeAlreadyCreatedError,
} from '../../domain/entities/content-entity/content-errors';
import {
  ContentUsecaseFilters,
} from '../../domain/usecases/content-usecase/content-usecase-filters';
import ContentUsecase from '../../domain/usecases/content-usecase/content-usecase';
import validateContentUpdate from '../../domain/entities/content-entity/content-validations/update-content-validations';
import validateContentCreation from '../../domain/entities/content-entity/content-validations/create-content-validations';

class ContentUsecaseApplication extends ContentUsecase {
  getContent = async (
    filters: ContentUsecaseFilters,
  ): Promise<DetailedContent> => {
    const content = await this.contentRepository.getContent(filters);
    if (!content) throw ContentNotFoundError;

    return content;
  };

  createContentByUsername = async (
    username: string,
    payload: CreateContent,
  ): Promise<DetailedContent> => {
    validateContentCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const content = await this.contentRepository.getContent({ username, type: payload.type });
    if (content) throw ContentTypeAlreadyCreatedError;

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

    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    const updatedContent = await this.contentRepository.updateContent({
      type: payload.type,
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
    });
    if (!updatedContent) throw ContentUpdateFailedError;

    return updatedContent;
  };
}

export default ContentUsecaseApplication;
