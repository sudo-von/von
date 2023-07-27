import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import {
  CreateVideoContentRequest,
} from '../../../dtos/content-dto/content-server-request-dtos';
import VideoUsecase from '../../../../../domain/usecases/video-usecase/video-usecase';

class VideoController {
  constructor(private readonly videoUsecase: VideoUsecase) {}

  createVideoContentByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = CreateVideoContentRequest.parse(req.body);

      const createdContent = await this.videoUsecase.createVideoContentByUsername(username, {
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
        username,
        media: {
          video: {
            url: payload.video.url,
          },
        },
      });

      res.status(statusCode.CREATED).send({ result: createdContent });
    } catch (e) {
      next(e);
    }
  };

  updateVideoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = CreateVideoContentRequest.parse(req.body);

      const updatedVideo = await this.videoUsecase.updateVideoById(id, {
        url: payload.video.url,
      });

      res.status(statusCode.OK).send({ result: updatedVideo });
    } catch (e) {
      next(e);
    }
  };
}

export default VideoController;
