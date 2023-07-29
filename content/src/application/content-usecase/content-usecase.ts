import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  MediaType,
} from '../../domain/entities/media-entity/media-entities';
import {
  ContentNotFoundError,
  ContentUpdateFailedError,
} from '../../domain/entities/content-entity/content-errors';
import {
  Content,
  CreateBasicContent,
  UpdateBasicContent,
} from '../../domain/entities/content-entity/content-entities';
import ContentUsecase from '../../domain/usecases/content-usecase/content-usecase';
import validateContentUpdate from '../../domain/entities/content-entity/content-validations/update-content-validations';
import validateContentCreation from '../../domain/entities/content-entity/content-validations/create-content-validations';

class ContentUsecaseApplication extends ContentUsecase {
  getContentById = async (
    id: string,
  ): Promise<Content> => {
    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    return content;
  };

  getContentsByUsername = async (
    username: string,
  ): Promise<Content[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const contents = await this.contentRepository.getContents({ username });
    return contents;
  };

  updateContentById = async (
    id: string,
    payload: UpdateBasicContent,
  ): Promise<Content> => {
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

  createContentByUsername = async (
    username: string,
    payload: CreateBasicContent,
  ): Promise<Content> => {
    validateContentCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const createdContent = await this.contentRepository.createContent({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      username,
      media: {
        type: 'empty-media',
      },
    });

    return createdContent;
  };

  updateContentMediaTypeById = async (
    id: string,
    type: MediaType,
  ): Promise<Content> => {
    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    const updatedContent = await this.contentRepository.updateContent({
      media: {
        type,
      },
    }, { id });
    if (!updatedContent) throw ContentUpdateFailedError;

    return updatedContent;
  };
}

export default ContentUsecaseApplication;
