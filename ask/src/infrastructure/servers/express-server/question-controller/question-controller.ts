import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from '../../constants/status-codes';
import {
  createAnswerController,
  updateAnswerController,
} from '../../dtos/answer/answer-controller-dtos';
import {
  createQuestionController,
} from '../../dtos/question/question-controller-dtos';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import questionToQuestionController from '../../dtos/question/question-controller-mappers';

class QuestionController {
  constructor(
    private readonly userUsecase: UserUsecase,
    private readonly questionUsecase: QuestionUsecase,
  ) {}

  getAnsweredQuestionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const answeredQuestion = await this.questionUsecase.getAnsweredQuestionById(id);

      await this.userUsecase.increaseTotalViewsByUsername(answeredQuestion.username);

      const questionController = questionToQuestionController(answeredQuestion);

      res.status(statusCodes.success.ok).send({ result: questionController });
    } catch (e) {
      next(e);
    }
  };

  createQuestionByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = createQuestionController.parse(req.body);

      const createdQuestion = await this.questionUsecase.createQuestion({
        username,
        askedBy: req.ip,
        question: payload.question,
      });

      await this.userUsecase.increaseTotalQuestionsByUsername(username);

      const questionController = questionToQuestionController(createdQuestion);

      res.status(statusCodes.success.created).send({ result: questionController });
    } catch (e) {
      next(e);
    }
  };

  getQuestionsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const questions = await this.questionUsecase.getQuestionsByUsername(username);

      const questionControllers = questions.map(
        (question) => questionToQuestionController(question),
      );

      res.status(statusCodes.success.ok).send({ result: questionControllers });
    } catch (e) {
      next(e);
    }
  };

  getAnsweredQuestionsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const answeredQuestions = await this.questionUsecase.getAnsweredQuestionsByUsername(username);

      await this.userUsecase.increaseTotalViewsByUsername(username);

      const answeredQuestionControllers = answeredQuestions.map(
        (question) => questionToQuestionController(question),
      );

      res.status(statusCodes.success.ok).send({ result: answeredQuestionControllers });
    } catch (e) {
      next(e);
    }
  };

  getUnansweredQuestionsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const unansweredQuestions = await this.questionUsecase.getUnansweredQuestionsByUsername(
        username,
      );

      const unansweredQuestionControllers = unansweredQuestions.map(
        (question) => questionToQuestionController(question),
      );

      res.status(statusCodes.success.ok).send({ result: unansweredQuestionControllers });
    } catch (e) {
      next(e);
    }
  };

  createAnswerByQuestionId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = createAnswerController.parse(req.body);

      const answeredQuestion = await this.questionUsecase.createAnswerByQuestionId(id, {
        answer: payload.answer,
      });

      await this.userUsecase.increaseTotalAnswersByUsername(answeredQuestion.username);

      const answeredQuestionController = questionToQuestionController(answeredQuestion);

      res.status(statusCodes.success.created).send({ result: answeredQuestionController });
    } catch (e) {
      next(e);
    }
  };

  updateAnswerByQuestionId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = updateAnswerController.parse(req.body);

      const answeredQuestion = await this.questionUsecase.updateAnswerByQuestionId(id, {
        answer: payload.answer,
      });

      const answeredQuestionController = questionToQuestionController(answeredQuestion);

      res.status(statusCodes.success.ok).send({ result: answeredQuestionController });
    } catch (e) {
      next(e);
    }
  };
}

export default QuestionController;
