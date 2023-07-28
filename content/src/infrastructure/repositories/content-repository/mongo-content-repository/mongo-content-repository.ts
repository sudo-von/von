import ContentModel from './mongo-content-repository-model';
import {
  Content,
  CreateContent,
  PartialContent,
} from '../../../../domain/entities/content-entity/content-entities';
import contentDocumentToContent from './mongo-content-repository-mapper';
import createContentRepositoryQuery from './mongo-content-repository-query';
import {
  ContentRepositoryFilters,
} from '../../../../domain/repositories/content-repository/content-repository-filters';
import IContentRepository from '../../../../domain/repositories/content-repository/content-repository';

class MongoContentRepository implements IContentRepository {
  getContent = async (
    filters?: ContentRepositoryFilters,
  ): Promise<Content | null> => {
    const query = createContentRepositoryQuery(filters);
    const contentDocument = await ContentModel.findOne(query);
    if (!contentDocument) return null;
    const content = contentDocumentToContent(contentDocument);
    return content;
  };

  getContents = async (
    filters?: ContentRepositoryFilters,
  ): Promise<Content[]> => {
    const query = createContentRepositoryQuery(filters);
    const contentDocuments = await ContentModel.find(query);
    const contents = contentDocuments.map((document) => contentDocumentToContent(document));
    return contents;
  };

  createContent = async (
    payload: CreateContent,
  ): Promise<Content> => {
    const contentModel = new ContentModel({
      title: payload.title,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
      media: {
        type: payload.media.type,
      },
    });
    const contentDocument = await contentModel.save();
    const video = contentDocumentToContent(contentDocument);
    return video;
  };

  updateContent = async (
    payload: PartialContent,
    filters?: ContentRepositoryFilters,
  ): Promise<Content | null> => {
    const query = createContentRepositoryQuery(filters);
    const contentDocument = await ContentModel.findOneAndUpdate(query, {
      title: payload.title,
      media: payload.media,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
    }, {
      new: true,
    });
    if (!contentDocument) return null;
    const video = contentDocumentToContent(contentDocument);
    return video;
  };

  updateContents = async (
    payload: PartialContent,
    filters?: ContentRepositoryFilters,
  ): Promise<void> => {
    const query = createContentRepositoryQuery(filters);
    await ContentModel.updateMany(query, {
      title: payload.title,
      media: payload.media,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
    });
  };
}

export default MongoContentRepository;
