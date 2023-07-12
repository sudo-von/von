import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import {
  CreateAnswerRequest,
  UpdateAnswerRequest,
} from '../../../dtos/answer-dto/answer-server-dtos';
import questionToQuestionResponse from '../../../dtos/question-dto/question-server-mappers';
import AnswerUsecase from '../../../../../domain/usecases/answer-usecase/answer-usecase';
import MetricUsecase from '../../../../../domain/usecases/metric-usecase/metric-usecase';

class AnswerController {
  constructor(
    private readonly answerUsecase: AnswerUsecase,
    private readonly metricUsecase: MetricUsecase,
  ) {}

  deleteAnswerByQuestionId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const deletedAnswer = await this.answerUsecase.deleteAnswerByQuestionId(id);

      await this.metricUsecase.decreaseTotalAnswersByUsername(deletedAnswer.username);

      const questionResponse = questionToQuestionResponse(deletedAnswer);

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

      await this.metricUsecase.increaseTotalAnswersByUsername(createdAnswer.username);

      const questionResponse = questionToQuestionResponse(createdAnswer);

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

      const questionResponse = questionToQuestionResponse(updatedAnswer);

      res.status(statusCode.OK).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default AnswerController;
