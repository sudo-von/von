import { NextFunction, Request, Response } from 'express';
import statusCodes from '../../status-codes';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import { ProfileDto } from '../../dtos/profile-dto';

class ExpressProfileController {
  constructor(
    protected profileUsecase: ProfileUsecase,
  ) {}

  getProfileWithMetricsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username } = req.params;

      const profile = await this.profileUsecase.getProfileByUsername(username);

      const profileDto: ProfileDto = {
        id: profile.id,
        username: profile.username,
        metrics: {
          total_answers: profile.metrics.totalAnswers,
          total_questions: profile.metrics.totalQuestions,
          total_views: profile.metrics.totalViews,
        },
      };

      return res.status(statusCodes.success.ok).send({ result: profileDto });
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressProfileController;
