import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from 'http-status-codes';
import { CreateVectorRequest } from '../../../dtos/vector-dto/vector-server-request-dtos';
import ContentUsecase from '../../../../../domain/usecases/content-usecase/content-usecase';
import contentToContentResponse from '../../../dtos/content-dto/content-server-mappers';

class ContentController {
  constructor(private readonly contentUsecase: ContentUsecase) {}

  getContentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const content = await this.contentUsecase.getContentById(id);

      const contentResponse = contentToContentResponse(content);

      res.status(statusCodes.OK).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };

  getContentsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const contents = await this.contentUsecase.getContentsByUsername(username);

      const contentResponse = contents.map((content) => contentToContentResponse(content));

      res.status(statusCodes.OK).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };

  createVectorByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = CreateVectorRequest.parse(req.body);

      const username = req.params.username.toLowerCase();

      const content = await this.contentUsecase.createContentByUsername(username, {
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
      });

      const contentResponse = contentToContentResponse(content);

      res.status(statusCodes.CREATED).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };

  updateContentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = CreateVectorRequest.parse(req.body);

      const id = req.params.id.toLowerCase();

      const updatedContent = await this.contentUsecase.updateContentById(id, {
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
      });

      const contentResponse = contentToContentResponse(updatedContent);

      res.status(statusCodes.OK).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };

  updateContentMediaTypeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const updatedContent = await this.contentUsecase.updateContentMediaTypeById(id, 'video');

      const contentResponse = contentToContentResponse(updatedContent);

      res.status(statusCodes.OK).send({ result: contentResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default ContentController;
