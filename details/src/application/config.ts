import IProfileRepository from 'ask/src/domain/repositories/profile-repository';
import IQuestionRepository from 'ask/src/domain/repositories/question-repository';
import ProfileUsecaseApplication from './profile-usecase-application';
import QuestionUsecaseApplication from './question-usecase-application';

const configureUsecases = (
  profileRepository: IProfileRepository,
  questionRepository: IQuestionRepository,
) => {
  const profileUsecase = new ProfileUsecaseApplication(
    profileRepository,
    questionRepository,
  );
  const questionUsecase = new QuestionUsecaseApplication(
    profileRepository,
    questionRepository,
  );

  return { profileUsecase, questionUsecase };
};

export default configureUsecases;
