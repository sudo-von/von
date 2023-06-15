import { NextFunction, Request, Response } from 'express';
import statusCodes from '../../status-codes';
import CreatedQuestionDto from '../../dtos/question-dtos/created-question-dto';
import { createQuestionDto } from '../../dtos/question-dtos/create-question-dto';
import { CreateQuestionEntity } from '../../../../domain/entities/question-entity';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';

class ExpressQuestionController {
  constructor(
    protected questionUsecase: QuestionUsecase,
  ) {}

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
      const question = await this.questionUsecase.createQuestion(createQuestionEntity);
      const createdQuestion: CreatedQuestionDto = {
        id: question.id,
        question: question.question,
        askedAt: question.askedAt,
        username: question.username,
      };
      res.status(statusCodes.success.created).send({ result: createdQuestion });
    } catch (e) {
      next(e);
    }
  };
}

export default ExpressQuestionController;
