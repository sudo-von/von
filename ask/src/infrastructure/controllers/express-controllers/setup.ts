import express from 'express';
import createAnswerRouter from './answer-controller/express-answer-router';
import createQuestionRouter from './question-controller/express-question-router';
import QuestionUsecase from '../../../domain/usecases/question-usecase';
import AnswerUsecase from '../../../domain/usecases/answer-usecase';
import errorHandler from './middlewares/error-handler';

const configureControllers = (
  questionUsecase: QuestionUsecase,
  answerUsecase: AnswerUsecase,
) => {
  const questionRouter = createQuestionRouter(questionUsecase);
  const answerRouter = createAnswerRouter(answerUsecase);

  const app = express();
  app.use(express.json());
  app.set('trust proxy', true);
  app.use('/v1/answers', answerRouter);
  app.use('/v1/questions', questionRouter);
  app.use(errorHandler);

  app.listen(3001, () => {
    console.log(`💻 [Controllers]: Starting application on port ${3001}.`);
  });
};

export default configureControllers;
