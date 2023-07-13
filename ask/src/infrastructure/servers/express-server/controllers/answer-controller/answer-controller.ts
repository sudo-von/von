import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import {
  CreateAnswerRequest,
  UpdateAnswerRequest,
} from '../../../dtos/answer-dto/answer-server-request-dtos';
import AnswerUsecase from '../../../../../domain/usecases/answer-usecase/answer-usecase';
import questionToDetailedQuestionResponse from '../../../dtos/question-dto/question-server-mappers';

class AnswerController {
  constructor(private readonly answerUsecase: AnswerUsecase) {}

  deleteAnswerByQuestionId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const deletedAnswer = await this.answerUsecase.deleteAnswerByQuestionId(id);

      const questionResponse = questionToDetailedQuestionResponse(deletedAnswer);

      res.status(statusCode.ACCEPTED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  createAnswerByQuestionId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = CreateAnswerRequest.parse(req.body);

      const createdAnswer = await this.answerUsecase.createAnswerByQuestionId(id, {
        answer: payload.answer,
      });

      const questionResponse = questionToDetailedQuestionResponse(createdAnswer);

      res.status(statusCode.CREATED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  updateAnswerByQuestionId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = UpdateAnswerRequest.parse(req.body);

      const updatedAnswer = await this.answerUsecase.updateAnswerByQuestionId(id, {
        answer: payload.answer,
      });

      const questionResponse = questionToDetailedQuestionResponse(updatedAnswer);

      res.status(statusCode.OK).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default AnswerController;
