import {
  UserNotFoundError,
} from '../../domain/entities/user/user-errors';
import {
  Question,
} from '../../domain/entities/question/question-entities';
import formatQuestion from '../../domain/entities/question/question-formatters';
import UnansweredQuestionUsecase from '../../domain/usecases/unanswered-question-usecase/unanswered-question-usecase';

class UnansweredQuestionUsecaseApplication extends UnansweredQuestionUsecase {
  getUnansweredQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestions({ username, status: 'unanswered' });

    const formattedQuestions = questions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };
}

export default UnansweredQuestionUsecaseApplication;
