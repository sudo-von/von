import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import {
  CreateContentRequest,
  UpdateContentRequest,
  CreateContentFiltersRequest,
} from '../../../dtos/content-dto/content-server-request-dtos';
import ContentUsecase from '../../../../../domain/usecases/content-usecase/content-usecase';
import contentToDetailedContentResponse from '../../../dtos/content-dto/content-server-mappers';

class ContentController {
  constructor(private readonly contentUsecase: ContentUsecase) {}

  getContent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const type = req.params.type.toLowerCase();
      const username = req.params.username.toLowerCase();

      const content = await this.contentUsecase.getContent(type, username);

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

  createContentByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = CreateContentRequest.parse(req.body);

      const createdContent = await this.contentUsecase.createContentByUsername(username, {
        type: payload.type,
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
      });

      const contentResponse = contentToDetailedContentResponse(createdContent);

      res.status(statusCode.CREATED).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };

  updateContentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = UpdateContentRequest.parse(req.body);

      const updatedContent = await this.contentUsecase.updateContentById(id, {
        type: payload.type,
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
      });

      const contentResponse = contentToDetailedContentResponse(updatedContent);

      res.status(statusCode.OK).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default ContentController;
