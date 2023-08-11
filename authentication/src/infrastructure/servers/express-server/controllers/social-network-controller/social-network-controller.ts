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
import {
  CreateSocialNetworkRequest,
} from '../../../dtos/social-networks-dto/social-networks-server-request-dtos';
import detailedSecureUserToResponse from '../../../dtos/user-dto/user-server-mappers';
import SocialNetworkUsecase from '../../../../../domain/usecases/social-newtork-usecase/social-newtork-usecase';

class SocialNetworkController {
  constructor(private readonly socialNetworksUsecase: SocialNetworkUsecase) {}

  createSocialNetworkFileByUsername: RequestHandler = async (req, res, next) => {
    try {
      const {
        body, file, params, user,
      } = req;

      if (!user) throw UserPermissionDeniedServerError;

      if (!file) throw InvalidFileParameterServerError;

      const username = params.username.toLowerCase();

      const payload = CreateSocialNetworkRequest.parse(body);

      const secureUser = await this.socialNetworksUsecase.createSocialNetworkFileByUsername(
        username,
        {
          name: payload.name,
          url: payload.url,
          size: file.size,
          buffer: file.buffer,
          mimetype: file.mimetype,
        },
      );

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.CREATED).send({ result: secureUserResponse });
    } catch (e) {
      next(e);
    }
  };

  updateSocialNetworkFileById: RequestHandler = async (req, res, next) => {
    try {
      const {
        body, file, params, user,
      } = req;

      if (!user) throw UserPermissionDeniedServerError;

      if (!file) throw InvalidFileParameterServerError;

      const id = params.id.toLowerCase();

      const payload = CreateSocialNetworkRequest.parse(body);

      const secureUser = await this.socialNetworksUsecase.updateSocialNetworkFileById(
        id,
        {
          name: payload.name,
          url: payload.url,
          size: file.size,
          buffer: file.buffer,
          mimetype: file.mimetype,
        },
      );

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.OK).send({ result: secureUserResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default SocialNetworkController;
