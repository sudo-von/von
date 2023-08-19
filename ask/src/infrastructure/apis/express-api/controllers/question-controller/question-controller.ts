import {
  RequestHandler,
} from 'express';
import statusCode from 'http-status-codes';
import {
  UserPermissionDeniedServerError,
} from '../../../entities/domain-entities/user-entity/user-errors';
import QuestionUsecase from '../../../../../domain/usecases/question-usecase/question-usecase';
import detailedQuestionToResponse from '../../../entities/domain-entities/question-entity/question-mappers';
import CreateQuestionRequest from '../../../entities/domain-entities/question-entity/question-request-entities';

class QuestionController {
  constructor(private readonly questionUsecase: QuestionUsecase) {}

  deleteQuestionById: RequestHandler = async (req, res, next) => {
    try {
      const { user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      const id = req.params.id.toLowerCase();

      const question = await this.questionUsecase.deleteQuestionById(id);

      const questionResponse = detailedQuestionToResponse(question);

      res.status(statusCode.ACCEPTED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  getQuestionsByUsername: RequestHandler = async (req, res, next) => {
    try {
      const { user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      const username = req.params.username.toLowerCase();

      const questions = await this.questionUsecase.getQuestionsByUsername(username);

      const questionResponses = questions.map(
        (question) => detailedQuestionToResponse(question),
      );

      res.status(statusCode.OK).send({ result: questionResponses });
    } catch (e) {
      next(e);
    }
  };

  createQuestionByUsername: RequestHandler = async (req, res, next) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = CreateQuestionRequest.parse(req.body);

      const createdQuestion = await this.questionUsecase.createQuestionByUsername(username, {
        askedBy: req.ip,
        question: payload.question,
      });

      const questionResponse = detailedQuestionToResponse(createdQuestion);

      res.status(statusCode.CREATED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default QuestionController;
