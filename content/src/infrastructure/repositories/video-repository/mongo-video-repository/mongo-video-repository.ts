import VideoModel from './mongo-video-repository-model';
import {
  Video,
  PartialVideo,
} from '../../../../domain/entities/video-entity/video-entitites';
import detailedContentDocumentToVideo from './mongo-video-repository-mapper';
import IVideoRepository from '../../../../domain/repositories/video-repository/video-repository';

class MongoVideoRepository implements IVideoRepository {
  getVideoById = async (
    id: string,
  ): Promise<Video | null> => {
    const contentDocument = await VideoModel.findById(id);
    if (!contentDocument) return null;
    const video = detailedContentDocumentToVideo(contentDocument);
    return video;
  };

  updateVideoById = async (
    id: string,
    payload: PartialVideo,
  ): Promise<Video | null> => {
    const updatedDocument = await VideoModel.findByIdAndUpdate(id, {
      url: payload.url,
    }, {
      new: true,
    });
    if (!updatedDocument) return null;
    const video = detailedContentDocumentToVideo(updatedDocument);
    return video;
  };
}

export default MongoVideoRepository;
