import { Request, Response } from 'express';
import statusCodes from '../../status-codes';
import QuestionController from '../question-controller';
import CreatedQuestionDto from '../../dtos/question-dtos/created-question-dto';
import { createQuestionDto } from '../../dtos/question-dtos/create-question-dto';
import { CreateQuestionEntity } from '../../../../domain/entities/question-entity';

class ExpressQuestionController extends QuestionController {
  createQuestion = async (req: Request, res: Response) => {
    try {
      const payload = createQuestionDto.parse(req.body);
      const createQuestionEntity: CreateQuestionEntity = {
        question: payload.question,
        username: payload.username,
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
      res.status(500).send({ e: 'error' });
    }
  };
}

export default ExpressQuestionController;