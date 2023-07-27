import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import {
  UpdateContentRequest,
} from '../../../dtos/content-dto/content-server-request-dtos';
import ContentUsecase from '../../../../../domain/usecases/content-usecase/content-usecase';
import contentToDetailedContentResponse from '../../../dtos/content-dto/content-server-mappers';

class ContentController {
  constructor(private readonly contentUsecase: ContentUsecase) {}

  getContentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const content = await this.contentUsecase.getContentById(id);

      const contentResponse = contentToDetailedContentResponse(content);

      res.status(statusCode.OK).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };

  getContentsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const contents = await this.contentUsecase.getContentsByUsername(username);

      const contentResponses = contents.map((content) => contentToDetailedContentResponse(content));

      res.status(statusCode.OK).send({ result: contentResponses });
    } catch (e) {
      next(e);
    }
  };

  updateContentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = UpdateContentRequest.parse(req.body);

      const content = await this.contentUsecase.updateContentById(id, {
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
      });

      res.status(statusCode.OK).send({ result: content });
    } catch (e) {
      next(e);
    }
  };

  deleteContentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      await this.contentUsecase.deleteContentById(id);

      res.sendStatus(statusCode.OK);
    } catch (e) {
      next(e);
    }
  };
}

export default ContentController;
