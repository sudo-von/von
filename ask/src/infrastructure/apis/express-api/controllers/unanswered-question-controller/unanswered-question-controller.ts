import {
  RequestHandler,
} from 'express';
import statusCode from 'http-status-codes';
import {
  UserPermissionDeniedServerError,
} from '../../../entities/domain-entities/user-entity/user-errors';
import detailedQuestionToResponse from '../../../entities/domain-entities/question-entity/question-mappers';
import UnansweredQuestionUsecase from '../../../../../domain/usecases/unanswered-question-usecase/unanswered-question-usecase';

class UnansweredQuestionController {
  constructor(private readonly unansweredQuestionUsecase: UnansweredQuestionUsecase) {}

  getUnansweredQuestionById: RequestHandler = async (req, res, next) => {
    try {
      const { user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      const id = req.params.id.toLowerCase();

      const question = await this.unansweredQuestionUsecase.getUnansweredQuestionById(id);

      const questionResponse = detailedQuestionToResponse(question);

      res.status(statusCode.OK).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  getUnansweredQuestionsByUsername: RequestHandler = async (req, res, next) => {
    try {
      const { user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      const username = req.params.username.toLowerCase();

      const questions = await this.unansweredQuestionUsecase.getUnansweredQuestionsByUsername(
        username,
      );

      const questionResponses = questions.map(
        (question) => detailedQuestionToResponse(question),
      );

      res.status(statusCode.OK).send({ result: questionResponses });
    } catch (e) {
      next(e);
    }
  };
}

export default UnansweredQuestionController;
