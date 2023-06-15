import express from 'express';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import ExpressQuestionController from './express-question-controller';
import validateRequestBodyHandler from './middlewares/validate-request-body-handler';
import errorHandler from './middlewares/error-handler';

const createQuestionRouter = (
  questionUsecase: QuestionUsecase,
  port: number,
) => {
  const questionController = new ExpressQuestionController(questionUsecase);

  const app = express();
  app.use(express.json());
  app.set('trust proxy', true);

  const router = express.Router();
  router.post('/user/:username', validateRequestBodyHandler, questionController.createQuestion);

  app.use('/v1/questions', router);
  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`💻 [QuestionController][start]: Starting application on port ${port}.`);
  });
};

export default createQuestionRouter;
