import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from 'http-status-codes';
import {
  UserPermissionDeniedServerError,
} from '../../../dtos/user-dto/user-server-errors';
import {
  InvalidFileParameterServerError,
} from '../../../dtos/common-dto/common-server-errors';
import avatarToAvatarResponse from '../../../dtos/avatar-dto/avatar-server-mappers';
import AvatarUsecase from '../../../../../domain/usecases/avatar-usecase/avatar-usecase';

class AvatarController {
  constructor(private readonly avatarUsecase: AvatarUsecase) {}

  createAvatarFileByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { file, user, params } = req;

      if (!user) throw UserPermissionDeniedServerError;

      if (!file) throw InvalidFileParameterServerError;

      const id = params.id.toLowerCase();

      const avatar = await this.avatarUsecase.createAvatarFileByUserId(id, {
        name: file.originalname,
        size: file.size,
        buffer: file.buffer,
        mimetype: file.mimetype,
      });

      const avataResponse = avatarToAvatarResponse(avatar);

      res.status(statusCodes.CREATED).send({ result: avataResponse });
    } catch (e) {
      next(e);
    }
  };

  updateAvatarFileByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { file, user, params } = req;

      if (!user) throw UserPermissionDeniedServerError;

      if (!file) throw InvalidFileParameterServerError;

      const id = params.id.toLowerCase();

      const updatedAvatar = await this.avatarUsecase.updateAvatarFileByUserId(id, {
        name: file.originalname,
        size: file.size,
        buffer: file.buffer,
        mimetype: file.mimetype,
      });

      const avataResponse = avatarToAvatarResponse(updatedAvatar);

      res.status(statusCodes.OK).send({ result: avataResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default AvatarController;
