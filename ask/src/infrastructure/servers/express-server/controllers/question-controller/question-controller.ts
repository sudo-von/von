import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import CreateQuestionRequest from '../../../dtos/question-dto/question-server-request-dtos';
import QuestionUsecase from '../../../../../domain/usecases/question-usecase/question-usecase';
import questionToDetailedQuestionResponse from '../../../dtos/question-dto/question-server-mappers';

class QuestionController {
  constructor(private readonly questionUsecase: QuestionUsecase) {}

  deleteQuestionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const question = await this.questionUsecase.deleteQuestionById(id);

      const questionResponse = questionToDetailedQuestionResponse(question);

      res.status(statusCode.ACCEPTED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  getQuestionsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const questions = await this.questionUsecase.getQuestionsByUsername(username);

      const questionResponses = questions.map(
        (question) => questionToDetailedQuestionResponse(question),
      );

      res.status(statusCode.OK).send({ result: questionResponses });
    } catch (e) {
      next(e);
    }
  };

  createQuestionByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = CreateQuestionRequest.parse(req.body);

      const createdQuestion = await this.questionUsecase.createQuestionByUsername(username, {
        askedBy: req.ip,
        question: payload.question,
      });

      const questionResponse = questionToDetailedQuestionResponse(createdQuestion);

      res.status(statusCode.CREATED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };
}

export default QuestionController;
