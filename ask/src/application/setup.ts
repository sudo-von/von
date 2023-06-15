import IProfileRepository from '../domain/repositories/profile-repository';
import IQuestionRepository from '../domain/repositories/question-repository';
import AnswerUsecaseApplication from './answer-usecase-application';
import ProfileUsecaseApplication from './profile-usecase-application';
import QuestionUsecaseApplication from './question-usecase-application';

const configureUsecases = (
  profileRepository: IProfileRepository,
  questionRepository: IQuestionRepository,
) => {
  const profileUsecase = new ProfileUsecaseApplication(profileRepository);
  const questionUsecase = new QuestionUsecaseApplication(
    profileRepository,
    questionRepository,
  );
  const answerUsecase = new AnswerUsecaseApplication(
    profileRepository,
    questionRepository,
  );
  return { profileUsecase, questionUsecase, answerUsecase };
};

export default configureUsecases;
