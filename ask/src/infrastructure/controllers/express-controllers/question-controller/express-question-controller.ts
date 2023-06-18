import { NextFunction, Request, Response } from 'express';
import statusCodes from '../../status-codes';
import { QuestionDto } from '../../dtos/question-dto';
import { createQuestionDto } from '../../dtos/create-question-dto';
import { PERMISSION_DENIED_REQUEST } from '../../errors/request-errors';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import { CreateQuestionEntity } from '../../../../domain/entities/question-entity';

class ExpressQuestionController {
  constructor(
    protected questionUsecase: QuestionUsecase,
    protected profileUsecase: ProfileUsecase,
  ) {}

  createQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username } = req.params;

      const body = createQuestionDto.parse(req.body);

      const createQuestionEntity: CreateQuestionEntity = {
        username,
        question: body.question,
        askedBy: req.ip,
        askedAt: new Date(new Date().toUTCString()),
        views: 0,
      };

      const createdQuestion = await this.questionUsecase.createQuestion(createQuestionEntity);

      await this.profileUsecase.increaseTotalQuestionsByUsername(username);

      const questionDto: QuestionDto = {
        id: createdQuestion.id,
        username: createdQuestion.username,
        question: createdQuestion.question,
        views: createdQuestion.views,
        asked_at: createdQuestion.askedAt,
        asked_by: createdQuestion.askedBy,
      };

      return res.status(statusCodes.success.created).send({ result: questionDto });
    } catch (e) {
      return next(e);
    }
  };

  getAnsweredQuestionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const answeredQuestion = await this.questionUsecase.getAnsweredQuestionById(id);

      await this.profileUsecase.increaseTotalViewsByUsername(answeredQuestion.username);

      const answeredQuestionDto: QuestionDto = {
        id: answeredQuestion.id,
        username: answeredQuestion.username,
        question: answeredQuestion.question,
        views: answeredQuestion.views,
        asked_at: answeredQuestion.askedAt,
        asked_by: answeredQuestion.askedBy,
      };

      if (answeredQuestion.answer) {
        answeredQuestionDto.answer = {
          answer: answeredQuestion.answer.answer,
          answered_at: answeredQuestion.answer.answeredAt,
        };
      }

      return res.status(statusCodes.success.ok).send({ result: answeredQuestionDto });
    } catch (e) {
      return next(e);
    }
  };

  getAllQuestionsByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user, params } = req;
      const { username } = params;

      if (!user) {
        return res.status(PERMISSION_DENIED_REQUEST.statusCode).send({
          message: PERMISSION_DENIED_REQUEST.message,
        });
      }

      const allQuestions = await this.questionUsecase.getAllQuestionsByUser(
        user.username,
        username,
      );

      const allQuestionsDto: QuestionDto[] = allQuestions.map((q) => {
        const questionDto: QuestionDto = {
          id: q.id,
          username: q.username,
          question: q.question,
          views: q.views,
          asked_at: q.askedAt,
          asked_by: q.askedBy,
        };

        if (q.answer) {
          questionDto.answer = {
            answer: q.answer.answer,
            answered_at: q.answer.answeredAt,
          };
        }

        return questionDto;
      });

      return res.status(statusCodes.success.ok).send({ result: allQuestionsDto });
    } catch (e) {
      return next(e);
    }
  };

  getAnsweredQuestionsByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username } = req.params;

      const answeredQuestions = await this.questionUsecase.getAnsweredQuestionsByUser(username);

      await this.profileUsecase.increaseTotalViewsByUsername(username);

      const answeredQuestionsDto: QuestionDto[] = answeredQuestions.map((q) => {
        const question: QuestionDto = {
          id: q.id,
          username: q.username,
          question: q.question,
          views: q.views,
          asked_at: q.askedAt,
          asked_by: q.askedBy,
        };

        if (q.answer) {
          question.answer = {
            answer: q.answer.answer,
            answered_at: q.answer.answeredAt,
          };
        }

        return question;
      });

      return res.status(statusCodes.success.ok).send({ result: answeredQuestionsDto });
    } catch (e) {
      return next(e);
    }
  };

  getUnansweredQuestionsByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user, params } = req;
      const { username } = params;

      if (!user) {
        return res.status(PERMISSION_DENIED_REQUEST.statusCode).send({
          message: PERMISSION_DENIED_REQUEST.message,
        });
      }

      const unansweredQuestions = await this.questionUsecase.getUnansweredQuestionsByUser(
        user.username,
        username,
      );

      const unansweredQuestionsDto: QuestionDto[] = unansweredQuestions.map((q) => ({
        id: q.id,
        username: q.username,
        question: q.question,
        views: q.views,
        asked_at: q.askedAt,
        asked_by: q.askedBy,
      }));

      return res.status(statusCodes.success.ok).send({ result: unansweredQuestionsDto });
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressQuestionController;
