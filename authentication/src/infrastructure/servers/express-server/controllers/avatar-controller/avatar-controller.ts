import {
  RequestHandler,
} from 'express';
import statusCodes from 'http-status-codes';
import {
  UserPermissionDeniedServerError,
} from '../../../dtos/user-dto/user-server-errors';
import {
  InvalidFileParameterServerError,
} from '../../../dtos/common-dto/common-server-errors';
import detailedSecureUserToResponse from '../../../dtos/user-dto/user-server-mappers';
import AvatarUsecase from '../../../../../domain/usecases/avatar-usecase/avatar-usecase';

class AvatarController {
  constructor(private readonly avatarUsecase: AvatarUsecase) {}

  replaceAvatarFileByUsername: RequestHandler = async (req, res, next) => {
    try {
      const { file, user, params } = req;

      if (!user) throw UserPermissionDeniedServerError;

      if (!file) throw InvalidFileParameterServerError;

      const username = params.username.toLowerCase();

      const secureUser = await this.avatarUsecase.replaceAvatarFileByUsername(username, {
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
