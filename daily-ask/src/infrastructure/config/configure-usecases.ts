import QuestionUsecaseApplication from '../../application/question-usecase/question-usecase';

const configureUsecases = () => {
  const questionUsecase = new QuestionUsecaseApplication();

  return { questionUsecase };
};

export default configureUsecases;
