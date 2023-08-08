import {
  RequestHandler,
} from 'express';
import statusCodes from 'http-status-codes';
import {
  UserPermissionDeniedServerError,
} from '../../../dtos/user-dto/user-server-errors';
import detailedSecureUserToResponse from '../../../dtos/user-dto/user-server-mappers';
import ReplaceUserDetailsRequest from '../../../dtos/user-details-dto/user-details-server-request-dtos';
import UserDetailsUsecase from '../../../../../domain/usecases/user-details-usecase/user-details-usecase';

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
