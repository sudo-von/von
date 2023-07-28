import AboutModel from './mongo-about-repository-model';
import {
  About,
  CreateAbout,
  PartialAbout,
} from '../../../../domain/entities/about-entity/about-entities';
import aboutDocumentToAbout from './mongo-about-repository-mapper';
import createAboutRepositoryQuery from './mongo-about-repository-query';
import {
  AboutRepositoryFilters,
} from '../../../../domain/repositories/about-repository/about-repository-filters';
import IAboutRepository from '../../../../domain/repositories/about-repository/about-repository';

class MongoAboutRepository implements IAboutRepository {
  getAbout = async (
    filters?: AboutRepositoryFilters,
  ): Promise<About | null> => {
    const query = createAboutRepositoryQuery(filters);
    const aboutDocument = await AboutModel.findOne(query);
    if (!aboutDocument) return null;
    const about = aboutDocumentToAbout(aboutDocument);
    return about;
  };

  createAbout = async (
    payload: CreateAbout,
  ): Promise<About> => {
    const aboutModel = new AboutModel({
      title: payload.title,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
      media: {
        url: payload.media.url,
      },
    });
    const aboutDocument = await aboutModel.save();
    const about = aboutDocumentToAbout(aboutDocument);
    return about;
  };

  updateAbout = async (
    payload: PartialAbout,
    filters?: AboutRepositoryFilters,
  ): Promise<About | null> => {
    const query = createAboutRepositoryQuery(filters);
    const aboutDocument = await AboutModel.findOneAndUpdate(query, {
      title: payload.title,
      media: payload.media,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
    }, {
      new: true,
    });
    if (!aboutDocument) return null;
    const about = aboutDocumentToAbout(aboutDocument);
    return about;
  };

  updateAbouts = async (
    payload: PartialAbout,
    filters?: AboutRepositoryFilters,
  ): Promise<void> => {
    const query = createAboutRepositoryQuery(filters);
    await AboutModel.updateMany(query, {
      title: payload.title,
      media: payload.media,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
    });
  };
}

export default MongoAboutRepository;
