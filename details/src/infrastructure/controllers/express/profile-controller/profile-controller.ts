import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from '../../status-codes';
import {
  PERMISSION_DENIED_CONTROLLER,
} from '../../errors/common-controller-error';
import {
  CreateControllerProfileDto,
  UpdateControllerProfileDto,
} from '../../dtos/profile-dto/controller-profile-dto';
import {
  CreateProfileEntity,
  UpdateProfileEntity,
} from '../../../../domain/entities/profile/profile-entity';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import profileEntityToControllerProfileDto from '../../dtos/profile-dto/controller-profile-mapper';

class ExpressProfileController {
  constructor(private profileUsecase: ProfileUsecase) {}

  getProfileByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username } = req.params;

      const profile = await this.profileUsecase.getProfileByUsername(username);

      const controllerProfileDto = profileEntityToControllerProfileDto(profile);

      return res.status(statusCodes.success.ok).send({ result: controllerProfileDto });
    } catch (e) {
      return next(e);
    }
  };

  createProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user, params, body } = req;
      const { username } = params;

      if (!user) {
        return res.status(PERMISSION_DENIED_CONTROLLER.statusCode).send({
          message: PERMISSION_DENIED_CONTROLLER.message,
        });
      }

      const payload = CreateControllerProfileDto.parse(body);

      const createProfileEntity: CreateProfileEntity = {
        username,
        quote: payload.quote,
        interest: payload.interest,
        position: payload.position,
      };

      const createdProfile = await this.profileUsecase.createProfile(
        user.username,
        username,
        createProfileEntity,
      );

      const controllerProfileDto = profileEntityToControllerProfileDto(createdProfile);

      return res.status(statusCodes.success.created).send({ result: controllerProfileDto });
    } catch (e) {
      return next(e);
    }
  };

  updateProfileByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user, params, body } = req;
      const { username } = params;

      if (!user) {
        return res.status(PERMISSION_DENIED_CONTROLLER.statusCode).send({
          message: PERMISSION_DENIED_CONTROLLER.message,
        });
      }

      const payload = UpdateControllerProfileDto.parse(body);

      const updateProfileEntity: UpdateProfileEntity = {
        username,
        quote: payload.quote,
        interest: payload.interest,
        position: payload.position,
      };

      const updatedProfile = await this.profileUsecase.updateProfileByUsername(
        user.username,
        username,
        updateProfileEntity,
      );

      const controllerProfileDto = profileEntityToControllerProfileDto(updatedProfile);

      return res.status(statusCodes.success.ok).send({ result: controllerProfileDto });
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressProfileController;
