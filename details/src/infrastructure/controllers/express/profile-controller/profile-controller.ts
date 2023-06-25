import {
  NextFunction,
  Request,
  Response,
} from 'express';
import {
  CreateControllerProfileDto,
  UpdateControllerProfileDto,
  profileEntityToControllerProfileDto,
} from '../../dtos/controller-profile-dto';
import statusCodes from '../../status-codes';
import {
  CreateProfileEntity,
  UpdateProfileEntity,
} from '../../../../domain/entities/profile-entity';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import { PermissionDeniedError } from '../../../../domain/errors/common-error';

class ExpressProfileController {
  constructor(private profileUsecase: ProfileUsecase) {}

  createProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user, params, body } = req;
      const { username } = params;

      if (!user) throw PermissionDeniedError;

      const createControllerProfileDto = CreateControllerProfileDto.parse(body);

      const createProfileEntity: CreateProfileEntity = {
        username,
        quote: createControllerProfileDto.quote,
        interest: createControllerProfileDto.interest,
        position: createControllerProfileDto.position,
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

      if (!user) throw PermissionDeniedError;

      const updateControllerProfileDto = UpdateControllerProfileDto.parse(body);

      const updateProfileEntity: UpdateProfileEntity = {
        username,
        quote: updateControllerProfileDto.quote,
        interest: updateControllerProfileDto.interest,
        position: updateControllerProfileDto.position,
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
}

export default ExpressProfileController;
