import { NextFunction, Request, Response } from 'express';
import statusCodes from '../../status-codes';
import AnswerUsecase from '../../../../domain/usecases/answer-usecase';

class ExpressAnswerController {
  constructor(protected anserUsecase: AnswerUsecase) {}

  getAnswersByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username } = req.params;
      const answers = await this.anserUsecase.getAnsweredQuestionsByUsername(username);
      res.status(statusCodes.success.ok).send({ result: answers });
    } catch (e) {
      next(e);
    }
  };
}

export default ExpressAnswerController;
