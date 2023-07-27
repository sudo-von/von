import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import {
  CreateAboutRequest,
  UpdateAboutRequest,
} from '../../../dtos/about-dto/about-server-request-dtos';
import aboutToAboutResponse from '../../../dtos/about-dto/about-server-mappers';
import AboutUsecase from '../../../../../domain/usecases/about-usecase/about-usecase';

class AboutController {
  constructor(private readonly aboutUsecase: AboutUsecase) {}

  getAboutByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const about = await this.aboutUsecase.getAboutByUsername(username);

      const aboutResponse = aboutToAboutResponse(about);

      res.status(statusCode.OK).send({ result: aboutResponse });
    } catch (e) {
      next(e);
    }
  };

  createAboutByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = CreateAboutRequest.parse(req.body);

      const about = await this.aboutUsecase.createAboutByUsername(username, {
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
        media: {
          url: payload.media.url,
        },
      });

      const aboutResponse = aboutToAboutResponse(about);

      res.status(statusCode.CREATED).send({ result: aboutResponse });
    } catch (e) {
      next(e);
    }
  };

  updateAboutByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = UpdateAboutRequest.parse(req.body);

      const about = await this.aboutUsecase.updateAboutByUsername(username, {
        title: payload.title,
        subtitle: payload.subtitle,
        description: payload.description,
        media: {
          url: payload.media.url,
        },
      });

      const aboutResponse = aboutToAboutResponse(about);

      res.status(statusCode.OK).send({ result: aboutResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default AboutController;
