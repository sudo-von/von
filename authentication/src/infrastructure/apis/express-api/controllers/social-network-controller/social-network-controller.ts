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
import {
  CreateSocialNetworkRequest,
} from '../../../entities/domain-entities/social-network-entity/social-networks-request-entities';
import detailedSecureUserToResponse from '../../../entities/domain-entities/user-entity/user-mappers';
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

      const secureUser = await this.socialNetworksUsecase.createSocialNetworkFile(
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
