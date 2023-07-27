import {
  DetailedContent,
} from '../../../../domain/entities/content-entity/content-entities';
import contentDocumentToDetailedContent from './mongo-video-repository-mapper';
import IVideoRepository from '../../../../domain/repositories/video-repository/video-repository';
import { PartialVideo, Video } from '../../../../domain/entities/video-entity/video-entitites';
import VideoModel from './mongo-video-repository-model';

class MongoVideoRepository implements IVideoRepository {
  getVideoById = async (
    id: string,
  ): Promise<Video | null> => {
    const contentDocument = await VideoModel.findById(id);
    if (!contentDocument) return null;
    const content = contentDocumentToDetailedContent(contentDocument);
    return content;
  };

  updateVideoById = async (
    id: string,
    payload: PartialVideo,
  ): Promise<Video | null> => {
    const updatedDocument = await VideoModel.findByIdAndUpdate(id, {
      alt: payload.alt,
      url: payload.url,
    }, {
      new: true,
    });
    if (!updatedDocument) return null;
    const content = contentDocumentToDetailedContent(updatedDocument);
    return content;
  };
}

export default MongoVideoRepository;
