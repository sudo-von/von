import {
  RequestHandler,
} from 'express';
import statusCodes from 'http-status-codes';
import {
  UserPermissionDeniedServerError,
} from '../../../entities/domain-entities/user-entity/user-errors';
import detailedSecureUserToResponse from '../../../entities/domain-entities/user-entity/user-mappers';
import UserDetailsUsecase from '../../../../../domain/usecases/user-details-usecase/user-details-usecase';
import ReplaceUserDetailsRequest from '../../../entities/domain-entities/user-details-entity/user-details-request-entities';

class UserDetailsController {
  constructor(private readonly userDetailsUsecase: UserDetailsUsecase) {}

  replaceUserDetailsByUsername: RequestHandler = async (req, res, next) => {
    try {
      const { body, user, params } = req;

      if (!user) throw UserPermissionDeniedServerError;

      const username = params.username.toLowerCase();

      const payload = ReplaceUserDetailsRequest.parse(body);

      const secureUser = await this.userDetailsUsecase.replaceUserDetailsByUsername(username, {
        quote: payload.quote,
        interest: payload.interest,
        position: payload.position,
      });

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.OK).send({ result: secureUserResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default UserDetailsController;
