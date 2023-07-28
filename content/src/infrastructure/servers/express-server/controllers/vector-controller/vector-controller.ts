import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from 'http-status-codes';
import VectorUsecase from '../../../../../domain/usecases/vector-usecase/vector-usecase';
import vectorToVectorCollectionReponse from '../../../dtos/vector-dto/vector-server-mappers';
import { CreateVectorRequest } from '../../../dtos/vector-dto/vector-server-request-dtos';

class AvatarController {
  constructor(private readonly vectorUsecase: VectorUsecase) {}

  createVectorByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { files, params } = req;

      if (!files) throw new Error('a');

      const payload = CreateVectorRequest.parse(req.body);

      const username = params.username.toLowerCase();

      const vector = await this.vectorUsecase.createVectorByUsername(username, {
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
        media: {
          vectors: (files as Express.Multer.File[]).map((f) => ({
            buffer: f.buffer,
            description: 'abc',
            mimetype: f.mimetype,
            size: f.size,
          })),
        },
      });

      const vectorResponse = vectorToVectorCollectionReponse(vector);

      res.status(statusCodes.CREATED).send({ result: vectorResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default AvatarController;
