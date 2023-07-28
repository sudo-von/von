import VideoModel from './mongo-video-repository-model';
import {
  Video,
  CreateVideo,
  PartialVideo,
} from '../../../../domain/entities/video-entity/video-entities';
import videoDocumentToVideo from './mongo-video-repository-mapper';
import createVideoRepositoryQuery from './mongo-video-repository-query';
import {
  VideoRepositoryFilters,
} from '../../../../domain/repositories/video-repository/video-repository-filters';
import IVideoRepository from '../../../../domain/repositories/video-repository/video-repository';

class MongoVideoRepository implements IVideoRepository {
  getVideo = async (
    filters?: VideoRepositoryFilters,
  ): Promise<Video | null> => {
    const query = createVideoRepositoryQuery(filters);
    const videoDocument = await VideoModel.findOne(query);
    if (!videoDocument) return null;
    const video = videoDocumentToVideo(videoDocument);
    return video;
  };

  createVideo = async (
    payload: CreateVideo,
  ): Promise<Video> => {
    const videoModel = new VideoModel({
      title: payload.title,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
      media: {
        url: payload.media.url,
      },
    });
    const videoDocument = await videoModel.save();
    const video = videoDocumentToVideo(videoDocument);
    return video;
  };

  updateVideo = async (
    payload: PartialVideo,
    filters?: VideoRepositoryFilters,
  ): Promise<Video | null> => {
    const query = createVideoRepositoryQuery(filters);
    const videoDocument = await VideoModel.findOneAndUpdate(query, {
      title: payload.title,
      media: payload.media,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
    }, {
      new: true,
    });
    if (!videoDocument) return null;
    const video = videoDocumentToVideo(videoDocument);
    return video;
  };

  updateVideos = async (
    payload: PartialVideo,
    filters?: VideoRepositoryFilters,
  ): Promise<void> => {
    const query = createVideoRepositoryQuery(filters);
    await VideoModel.updateMany(query, {
      title: payload.title,
      media: payload.media,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
    });
  };
}

export default MongoVideoRepository;
