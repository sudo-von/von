import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  formatQuestions,
} from '../../domain/entities/question-entity/question-utils';
import {
  QuestionNotFoundError,
  QuestionDeleteFailedError,
} from '../../domain/entities/question-entity/question-errors';
import {
  CreateQuestion,
  DetailedQuestion,
} from '../../domain/entities/question-entity/question-entities';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import validateQuestionCreation from '../../domain/entities/question-entity/question-validations/create-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  deleteQuestionById = async (
    id: string,
  ): Promise<void> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    const deletedQuestion = await this.questionRepository.deleteQuestion({ id });
    if (!deletedQuestion) throw QuestionDeleteFailedError;
  };

  getQuestionsByUsername = async (
    username: string,
  ): Promise<DetailedQuestion[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestions({ username, status: 'both' });

    const formatedQuestions = formatQuestions(questions);
    return formatedQuestions;
  };

  createQuestionByUsername = async (
    username: string,
    payload: CreateQuestion,
  ):Promise<DetailedQuestion> => {
    validateQuestionCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const createdQuestion = await this.questionRepository.createQuestion({
      views: 0,
      username,
      askedAt: new Date(),
      askedBy: payload.askedBy,
      question: payload.question,
    });

    return createdQuestion;
  };
}

export default QuestionUsecaseApplication;
