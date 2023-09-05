import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  QuestionNotFoundError,
  QuestionAlreadyAnsweredError,
} from '../../domain/entities/question-entity/question-errors';
import {
  DetailedQuestion,
} from '../../domain/entities/question-entity/question-entities';
import UnansweredQuestionUsecase from '../../domain/usecases/unanswered-question-usecase/unanswered-question-usecase';

class UnansweredQuestionUsecaseApplication extends UnansweredQuestionUsecase {
  getUnansweredQuestionById = async (
    id: string,
  ): Promise<DetailedQuestion> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (question.answer) throw QuestionAlreadyAnsweredError;

    return question;
  };

  getUnansweredQuestionsByUsername = async (
    username: string,
  ): Promise<DetailedQuestion[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestions({ username, status: 'unanswered' });
    return questions;
  };
}

export default UnansweredQuestionUsecaseApplication;
