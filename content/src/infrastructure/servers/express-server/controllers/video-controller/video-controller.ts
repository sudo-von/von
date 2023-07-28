import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import {
  CreateVideoRequest,
  UpdateVideoRequest,
} from '../../../dtos/video-dto/video-server-request-dtos';
import videoToVideoResponse from '../../../dtos/video-dto/video-server-mappers';
import VideoUsecase from '../../../../../domain/usecases/video-usecase/video-usecase';

class VideoController {
  constructor(private readonly videoUsecase: VideoUsecase) {}

  getVideoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const video = await this.videoUsecase.getVideoById(id);

      const videoResponse = videoToVideoResponse(video);

      res.status(statusCode.OK).send({ result: videoResponse });
    } catch (e) {
      next(e);
    }
  };

  createVideoByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = CreateVideoRequest.parse(req.body);

      const video = await this.videoUsecase.createVideoByUsername(username, {
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
        media: {
          url: payload.media.url,
        },
      });

      const videoResponse = videoToVideoResponse(video);

      res.status(statusCode.CREATED).send({ result: videoResponse });
    } catch (e) {
      next(e);
    }
  };

  updateVideoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = UpdateVideoRequest.parse(req.body);

      const video = await this.videoUsecase.updateVideoById(username, {
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
        media: {
          url: payload.media.url,
        },
      });

      const videoResponse = videoToVideoResponse(video);

      res.status(statusCode.OK).send({ result: videoResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default VideoController;
