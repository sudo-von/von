import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import ContentUsecase from '../../../../../domain/usecases/content-usecase/content-usecase';
import contentToDetailedContentResponse from '../../../dtos/content-dto/content-server-mappers';
import { CreateVideoContentRequest } from '../../../dtos/content-dto/content-server-request-dtos';
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
          type: 'video',
          video: {
            alt: payload.video.alt,
            url: payload.video.url,
          },
        },
      });

      const contentResponse = contentToDetailedContentResponse(createdContent);

      res.status(statusCode.CREATED).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default VideoController;
