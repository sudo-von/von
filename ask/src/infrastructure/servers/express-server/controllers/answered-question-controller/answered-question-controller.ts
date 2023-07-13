import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import MetricUsecase from '../../../../../domain/usecases/metric-usecase/metric-usecase';
import questionToDetailedQuestionResponse from '../../../dtos/question-dto/question-server-mappers';
import AnsweredQuestionUsecase from '../../../../../domain/usecases/answered-question-usecase/answered-question-usecase';

class AnsweredQuestionController {
  constructor(
    private readonly metricUsecase: MetricUsecase,
    private readonly answeredQuestionUsecase: AnsweredQuestionUsecase,
  ) {}

  getAnsweredQuestionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const question = await this.answeredQuestionUsecase.getAnsweredQuestionById(id);

      await this.metricUsecase.increaseTotalViewsByUsername(question.username);

      const questionResponse = questionToDetailedQuestionResponse(question);

      res.status(statusCode.OK).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  getAnsweredQuestionsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const questions = await this.answeredQuestionUsecase.getAnsweredQuestionsByUsername(username);

      await this.metricUsecase.increaseTotalViewsByUsername(username);

      const questionResponses = questions.map(
        (question) => questionToDetailedQuestionResponse(question),
      );

      res.status(statusCode.OK).send({ result: questionResponses });
    } catch (e) {
      next(e);
    }
  };
}

export default AnsweredQuestionController;
