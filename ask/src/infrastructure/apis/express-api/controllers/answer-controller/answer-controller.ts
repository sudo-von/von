import {
  RequestHandler,
} from 'express';
import statusCode from 'http-status-codes';
import {
  UserPermissionDeniedServerError,
} from '../../../entities/domain-entities/user-entity/user-errors';
import {
  CreateAnswerRequest,
  UpdateAnswerRequest,
} from '../../../entities/domain-entities/answer-entity/answer-request-entities';
import AnswerUsecase from '../../../../../domain/usecases/answer-usecase/answer-usecase';
import detailedQuestionToResponse from '../../../entities/domain-entities/question-entity/question-mappers';

class AnswerController {
  constructor(private readonly answerUsecase: AnswerUsecase) {}

  deleteAnswerByQuestionId: RequestHandler = async (req, res, next) => {
    try {
      const { user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      const id = req.params.id.toLowerCase();

      const deletedAnswer = await this.answerUsecase.deleteAnswerByQuestionId(id);

      const questionResponse = detailedQuestionToResponse(deletedAnswer);

      res.status(statusCode.ACCEPTED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  createAnswerByQuestionId: RequestHandler = async (req, res, next) => {
    try {
      const { user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      const id = req.params.id.toLowerCase();

      const payload = CreateAnswerRequest.parse(req.body);

      const createdAnswer = await this.answerUsecase.createAnswerByQuestionId(id, {
        answer: payload.answer,
      });

      const questionResponse = detailedQuestionToResponse(createdAnswer);

      res.status(statusCode.CREATED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  updateAnswerByQuestionId: RequestHandler = async (req, res, next) => {
    try {
      const { user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      const id = req.params.id.toLowerCase();

      const payload = UpdateAnswerRequest.parse(req.body);

      const updatedAnswer = await this.answerUsecase.updateAnswerByQuestionId(id, {
        answer: payload.answer,
      });

      const questionResponse = detailedQuestionToResponse(updatedAnswer);

      res.status(statusCode.OK).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default AnswerController;
