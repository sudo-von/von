import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from '../../../constants/status-codes';
import {
  createAnswerServer,
  updateAnswerServer,
} from '../../../dtos/answer/answer-server-dtos';
import {
  createQuestionServer,
} from '../../../dtos/question/question-server-dtos';
import UserUsecase from '../../../../../domain/usecases/user-usecase';
import QuestionUsecase from '../../../../../domain/usecases/question-usecase';
import questionToQuestionServer from '../../../dtos/question/question-server-mappers';

class QuestionController {
  constructor(
    private readonly userUsecase: UserUsecase,
    private readonly questionUsecase: QuestionUsecase,
  ) {}

  deleteQuestionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const deletedQuestion = await this.questionUsecase.deleteQuestionById(id);

      await this.userUsecase.decreaseTotalQuestionsByUsername(deletedQuestion.username);

      if (deletedQuestion.answer) {
        await this.userUsecase.decreaseTotalAnswersByUsername(deletedQuestion.username);
      }

      const formattedQuestion = questionToQuestionServer(deletedQuestion);

      res.status(statusCodes.success.accepted).send({ result: formattedQuestion });
    } catch (e) {
      next(e);
    }
  };

  deleteAnswerByQuestionId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const deletedAnswer = await this.questionUsecase.deleteAnswerByQuestionId(id);

      await this.userUsecase.decreaseTotalAnswersByUsername(deletedAnswer.username);

      const formattedQuestion = questionToQuestionServer(deletedAnswer);

      res.status(statusCodes.success.accepted).send({ result: formattedQuestion });
    } catch (e) {
      next(e);
    }
  };

  getAnsweredQuestionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const answeredQuestion = await this.questionUsecase.getAnsweredQuestionById(id);

      await this.userUsecase.increaseTotalViewsByUsername(answeredQuestion.username);

      const formattedQuestion = questionToQuestionServer(answeredQuestion);

      res.status(statusCodes.success.ok).send({ result: formattedQuestion });
    } catch (e) {
      next(e);
    }
  };

  createQuestionByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const payload = createQuestionServer.parse(req.body);

      const createdQuestion = await this.questionUsecase.createQuestion({
        username,
        askedBy: req.ip,
        question: payload.question,
      });

      await this.userUsecase.increaseTotalQuestionsByUsername(username);

      const formattedQuestion = questionToQuestionServer(createdQuestion);

      res.status(statusCodes.success.created).send({ result: formattedQuestion });
    } catch (e) {
      next(e);
    }
  };

  getQuestionsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const questions = await this.questionUsecase.getQuestionsByUsername(username);

      const formattedQuestions = questions.map(
        (question) => questionToQuestionServer(question),
      );

      res.status(statusCodes.success.ok).send({ result: formattedQuestions });
    } catch (e) {
      next(e);
    }
  };

  getAnsweredQuestionsByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const answeredQuestions = await this.questionUsecase.getAnsweredQuestionsByUsername(username);

      await this.userUsecase.increaseTotalViewsByUsername(username);

      const formattedAnsweredQuestions = answeredQuestions.map(
        (question) => questionToQuestionServer(question),
      );

      res.status(statusCodes.success.ok).send({ result: formattedAnsweredQuestions });
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

      const formattedUnansweredQuestions = unansweredQuestions.map(
        (question) => questionToQuestionServer(question),
      );

      res.status(statusCodes.success.ok).send({ result: formattedUnansweredQuestions });
    } catch (e) {
      next(e);
    }
  };

  createAnswerByQuestionId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = createAnswerServer.parse(req.body);

      const answeredQuestion = await this.questionUsecase.createAnswerByQuestionId(id, {
        answer: payload.answer,
      });

      await this.userUsecase.increaseTotalAnswersByUsername(answeredQuestion.username);

      const formattedAnsweredQuestion = questionToQuestionServer(answeredQuestion);

      res.status(statusCodes.success.created).send({ result: formattedAnsweredQuestion });
    } catch (e) {
      next(e);
    }
  };

  updateAnswerByQuestionId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const payload = updateAnswerServer.parse(req.body);

      const answeredQuestion = await this.questionUsecase.updateAnswerByQuestionId(id, {
        answer: payload.answer,
      });

      const formattedAnsweredQuestion = questionToQuestionServer(answeredQuestion);

      res.status(statusCodes.success.ok).send({ result: formattedAnsweredQuestion });
    } catch (e) {
      next(e);
    }
  };
}

export default QuestionController;
