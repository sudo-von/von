import ContentModel from './mongo-content-repository-model';
import {
  DetailedContent,
  CreateDetailedContent,
  PartialDetailedContent,
} from '../../../../domain/entities/content-entity/content-entities';
import createContentRepositoryQuery from './mongo-content-repository-query';
import contentDocumentToDetailedContent from './mongo-content-repository-mapper';
import {
  ContentRepositoryFilters,
} from '../../../../domain/repositories/content-repository/content-repository-filters';
import IContentRepository from '../../../../domain/repositories/content-repository/content-repository';

class MongoContentRepository implements IContentRepository {
  getContent = async (
    filters?: ContentRepositoryFilters,
  ): Promise<DetailedContent | null> => {
    const query = createContentRepositoryQuery(filters);
    const contentDocument = await ContentModel.findOne(query);
    if (!contentDocument) return null;
    const content = contentDocumentToDetailedContent(contentDocument);
    return content;
  };

  getContents = async (
    filters?: ContentRepositoryFilters,
  ): Promise<DetailedContent[]> => {
    const query = createContentRepositoryQuery(filters);
    const contentDocuments = await ContentModel.find(query);
    const contents = contentDocuments.map((document) => contentDocumentToDetailedContent(document));
    return contents;
  };

  createContent = async (
    payload: CreateDetailedContent,
  ): Promise<DetailedContent> => {
    const contentDocument = new ContentModel({
      title: payload.title,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
      media: payload.media,
    });
    const storedDocument = await contentDocument.save();
    const content = contentDocumentToDetailedContent(storedDocument);
    return content;
  };

  updateContent = async (
    payload: PartialDetailedContent,
    filters?: ContentRepositoryFilters,
  ): Promise<DetailedContent | null> => {
    const query = createContentRepositoryQuery(filters);
    const updatedDocument = await ContentModel.findOneAndUpdate(query, {
      title: payload.title,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
      media: payload.media,
    }, {
      new: true,
    });
    if (!updatedDocument) return null;
    const content = contentDocumentToDetailedContent(updatedDocument);
    return content;
  };

  updateContents = async (
    payload: PartialDetailedContent,
    filters?: ContentRepositoryFilters,
  ): Promise<void> => {
    const query = createContentRepositoryQuery(filters);
    await ContentModel.updateMany(query, {
      title: payload.title,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
      media: payload.media,
    });
  };

  deleteContentById = async (
    id: string,
  ): Promise<void> => {
    await ContentModel.findByIdAndDelete(id);
  };
}

export default MongoContentRepository;
