import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import questionToDetailedQuestionResponse from '../../../entities/question-dto/question-server-mappers';
import UnansweredQuestionUsecase from '../../../../../domain/usecases/unanswered-question-usecase/unanswered-question-usecase';

class UnansweredQuestionController {
  constructor(private readonly unansweredQuestionUsecase: UnansweredQuestionUsecase) {}

  getUnansweredQuestionsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const questions = await this.unansweredQuestionUsecase.getUnansweredQuestionsByUsername(
        username,
      );

      const questionResponses = questions.map(
        (question) => questionToDetailedQuestionResponse(question),
      );

      res.status(statusCode.OK).send({ result: questionResponses });
    } catch (e) {
      next(e);
    }
  };
}

export default UnansweredQuestionController;
