import express from 'express';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import ExpressQuestionController from './express-question-controller';

const createQuestionRouter = (
  questionUsecase: QuestionUsecase,
  port: number,
) => {
  const questionController = new ExpressQuestionController(questionUsecase);

  const app = express();
  app.use(express.json());

  const router = express.Router();
  router.post('/', questionController.createQuestion);

  app.use('/v1/question', router);

  app.listen(port, () => {
    console.log(`💻 [QuestionController][start]: Starting application on port ${port}.`);
  });
};

export default createQuestionRouter;
