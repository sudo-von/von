import AboutModel from './mongo-about-repository-model';
import {
  About,
  CreateAbout,
  PartialAbout,
} from '../../../../domain/entities/about-entity/about-entities';
import aboutDocumentToAbout from './mongo-about-repository-mapper';
import IAboutRepository from '../../../../domain/repositories/about-repository/about-repository';

class MongoAboutRepository implements IAboutRepository {
  getAboutByUsername = async (
    username: string,
  ): Promise<About | null> => {
    const aboutDocument = await AboutModel.findOne({ username });
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

  updateAboutById = async (
    id: string,
    payload: PartialAbout,
  ): Promise<About | null> => {
    const aboutDocument = await AboutModel.findByIdAndUpdate(id, {
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
}

export default MongoAboutRepository;
