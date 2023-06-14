import QuestionUsecase from '../../../domain/usecases/question-usecase';

abstract class QuestionController {
  constructor(
    protected questionUsecase: QuestionUsecase,
  ) {}
}

export default QuestionController;
