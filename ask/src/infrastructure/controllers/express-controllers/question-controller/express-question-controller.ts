import { NextFunction, Request, Response } from 'express';
import statusCodes from '../../status-codes';
import { PERMISSION_DENIED_REQUEST } from '../../errors/request-errors';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import { createQuestionDto } from '../../dtos/question-dtos/create-question-dto';
import { CreateQuestionEntity } from '../../../../domain/entities/question-entity';

class ExpressQuestionController {
  constructor(protected questionUsecase: QuestionUsecase) {}

  getUnansweredQuestionsByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user, params } = req;
      if (!user) {
        return res.status(PERMISSION_DENIED_REQUEST.statusCode).send({
          message: PERMISSION_DENIED_REQUEST.message,
        });
      }
      const { username } = params;
      const unansweredQuestions = await this.questionUsecase.getUnansweredQuestionsByUser(
        user.username,
        username,
      );
      return res.status(statusCodes.success.ok).send({ result: unansweredQuestions });
    } catch (e) {
      return next(e);
    }
  };

  getAllQuestionsByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user, params } = req;
      if (!user) {
        return res.status(PERMISSION_DENIED_REQUEST.statusCode).send({
          message: PERMISSION_DENIED_REQUEST.message,
        });
      }
      const { username } = params;
      const unansweredQuestions = await this.questionUsecase.getAllQuestionsByUser(
        user.username,
        username,
      );
      return res.status(statusCodes.success.ok).send({ result: unansweredQuestions });
    } catch (e) {
      return next(e);
    }
  };

  createQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username } = req.params;
      const payload = createQuestionDto.parse(req.body);
      const createQuestionEntity: CreateQuestionEntity = {
        username,
        question: payload.question,
        askedBy: req.ip || '',
        askedAt: new Date(new Date().toUTCString()),
      };
      const createdQuestion = await this.questionUsecase.createQuestion(createQuestionEntity);
      return res.status(statusCodes.success.created).send({ result: createdQuestion });
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressQuestionController;
