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
  constructor(private readonly avatarUsecase: AvatarUsecase) {}

  replaceAvatarFileByUsername: RequestHandler = async (req, res, next) => {
    try {
      const { file, user, params } = req;

      if (!user) throw UserPermissionDeniedServerError;

      if (!file) throw InvalidFileParameterServerError;

      const username = params.username.toLowerCase();

      const secureUser = await this.avatarUsecase.replaceAvatar(username, {
        size: file.size,
        buffer: file.buffer,
        mimetype: file.mimetype,
      });

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.CREATED).send({ result: secureUserResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default AvatarController;
