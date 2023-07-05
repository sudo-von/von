import {
  UserNotFoundError,
} from '../domain/entities/user/user-errors';
import {
  Question,
  CreateQuestion,
} from '../domain/entities/question/question-entities';
import QuestionUsecase from '../domain/usecases/question-usecase';
import validateQuestionCreation from '../domain/entities/question/validations/create-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  createQuestion = async (payload: CreateQuestion): Promise<Question> => {
    validateQuestionCreation(payload);

    const userFoundByUsername = await this.userRepository.getUserByUsername(payload.username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const createdQuestion = await this.questionRepository.createQuestion(payload);

    return createdQuestion;
  };
}

export default QuestionUsecaseApplication;
