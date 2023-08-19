import {
  RequestHandler,
} from 'express';
import statusCode from 'http-status-codes';
import MetricUsecase from '../../../../../domain/usecases/metric-usecase/metric-usecase';
import detailedQuestionToResponse from '../../../entities/domain-entities/question-entity/question-mappers';
import AnsweredQuestionUsecase from '../../../../../domain/usecases/answered-question-usecase/answered-question-usecase';

class AnsweredQuestionController {
  constructor(
    private readonly metricUsecase: MetricUsecase,
    private readonly answeredQuestionUsecase: AnsweredQuestionUsecase,
  ) {}

  getAnsweredQuestionById: RequestHandler = async (req, res, next) => {
    try {
      const id = req.params.id.toLowerCase();

      const question = await this.answeredQuestionUsecase.getAnsweredQuestionById(id);

      await this.metricUsecase.increaseTotalViewsByUsername(question.username);

      const questionResponse = detailedQuestionToResponse(question);

      res.status(statusCode.OK).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  getAnsweredQuestionsByUsername: RequestHandler = async (req, res, next) => {
    try {
      const username = req.params.username.toLowerCase();

      const questions = await this.answeredQuestionUsecase.getAnsweredQuestionsByUsername(username);

      await this.metricUsecase.increaseTotalViewsByUsername(username);

      const questionResponses = questions.map(
        (question) => detailedQuestionToResponse(question),
      );

      res.status(statusCode.OK).send({ result: questionResponses });
    } catch (e) {
      next(e);
    }
  };
}

export default AnsweredQuestionController;
