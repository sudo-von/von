import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import UpdateVideoMediaRequest from '../../../dtos/video-dto/video-server-request-dtos';
import contentToContentResponse from '../../../dtos/content-dto/content-server-mappers';
import VideoMediaUsecase from '../../../../../domain/usecases/video-media-usecase/video-media-usecase';

class VideoMediaController {
  constructor(private readonly videoMediaUsecase: VideoMediaUsecase) {}

  setVideoMediaByContentId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = UpdateVideoMediaRequest.parse(req.body);

      const content = await this.videoMediaUsecase.setVideoMediaByContentId(id, {
        url: payload.url,
      });

      const contentResponse = contentToContentResponse(content);

      res.status(statusCode.OK).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default VideoMediaController;
