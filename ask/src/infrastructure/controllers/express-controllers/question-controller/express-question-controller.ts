import { NextFunction, Request, Response } from 'express';
import statusCodes from '../../status-codes';
import CreatedQuestionDto from '../../dtos/question-dtos/created-question-dto';
import { createQuestionDto } from '../../dtos/question-dtos/create-question-dto';
import { CreateQuestionEntity } from '../../../../domain/entities/question-entity';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';

class ExpressQuestionController {
  constructor(protected questionUsecase: QuestionUsecase) {}

  getUnansweredQuestionsByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user, params } = req;
      if (!user) throw new Error('as');
      const { username } = params;
      const unansweredQuestions = await this.questionUsecase.getUnansweredQuestionsByUser(
        user.username,
        username,
      );
      res.status(statusCodes.success.ok).send({ result: unansweredQuestions });
    } catch (e) {
      next(e);
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
      res.status(statusCodes.success.created).send({ result: createdQuestion });
    } catch (e) {
      next(e);
    }
  };
}

export default ExpressQuestionController;
