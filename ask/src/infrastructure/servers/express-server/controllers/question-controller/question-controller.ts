import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import {
  CreateQuestionRequest,
} from '../../../dtos/question/question-server-dtos';
import questionToQuestionResponse from '../../../dtos/question/question-server-mappers';
import MetricUsecase from '../../../../../domain/usecases/metric-usecase/metric-usecase';
import QuestionUsecase from '../../../../../domain/usecases/question-usecase/question-usecase';

class QuestionController {
  constructor(
    private readonly metricUsecase: MetricUsecase,
    private readonly questionUsecase: QuestionUsecase,
  ) {}

  deleteQuestionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const question = await this.questionUsecase.deleteQuestionById(id);

      await this.metricUsecase.decreaseTotalQuestionsByUsername(question.username);

      if (question.answer) {
        await this.metricUsecase.decreaseTotalAnswersByUsername(question.username);
      }

      const questionResponse = questionToQuestionResponse(question);

      res.status(statusCode.ACCEPTED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  createQuestionByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = CreateQuestionRequest.parse(req.body);

      const createdQuestion = await this.questionUsecase.createQuestion({
        username,
        askedBy: req.ip,
        question: payload.question,
      });

      await this.metricUsecase.increaseTotalQuestionsByUsername(username);

      const questionResponse = questionToQuestionResponse(createdQuestion);

      res.status(statusCode.CREATED).send({ result: questionResponse });
    } catch (e) {
      next(e);
    }
  };

  getQuestionsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const questions = await this.questionUsecase.getQuestionsByUsername(username);

      const questionResponses = questions.map((question) => questionToQuestionResponse(question));

      res.status(statusCode.OK).send({ result: questionResponses });
    } catch (e) {
      next(e);
    }
  };
}

export default QuestionController;
