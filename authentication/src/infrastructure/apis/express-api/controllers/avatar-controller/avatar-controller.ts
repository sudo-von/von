import {
  RequestHandler,
} from 'express';
import statusCodes from 'http-status-codes';
import {
  InvalidFileParameterServerError,
} from '../../../entities/api-entities/api-errors';
import {
  UserPermissionDeniedServerError,
} from '../../../entities/domain-entities/user-entity/user-errors';
import AvatarUsecase from '../../../../../domain/usecases/avatar-usecase/avatar-usecase';
import detailedSecureUserToResponse from '../../../entities/domain-entities/user-entity/user-mappers';

class AvatarController {
  constructor(private readonly avatarUsecase: AvatarUsecase) { }

  deleteAvatar: RequestHandler = async (req, res, next) => {
    try {
      const { file, user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      if (!file) throw InvalidFileParameterServerError;

      const secureUser = await this.avatarUsecase.deleteAvatar();

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.OK).send({ result: secureUserResponse });
    } catch (e) {
      next(e);
    }
  };

  replaceAvatar: RequestHandler = async (req, res, next) => {
    try {
      const { file, user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      if (!file) throw InvalidFileParameterServerError;

      const secureUser = await this.avatarUsecase.replaceAvatar({
        size: file.size,
        buffer: file.buffer,
        mimeType: file.mimetype,
      });

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.CREATED).send({ result: secureUserResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default AvatarController;
