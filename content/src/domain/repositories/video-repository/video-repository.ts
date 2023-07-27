import {
  Video,
  PartialVideo,
} from '../../entities/video-entity/video-entitites';

interface IVideoRepositoryReader {
  getVideoById: (id: string)
  => Promise<Video | null>;
}

interface IVideoRepositoryWriter {
  updateVideoById: (id: string, payload: PartialVideo)
  => Promise<Video | null>;
}

interface IVideoRepository extends IVideoRepositoryReader, IVideoRepositoryWriter {}

export default IVideoRepository;
