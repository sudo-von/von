import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedQuestion,
} from '../../domain/entities/question-entity/question-entities';
import formatQuestion from '../../domain/entities/question-entity/question-formatters';
import UnansweredQuestionUsecase from '../../domain/usecases/unanswered-question-usecase/unanswered-question-usecase';

class UnansweredQuestionUsecaseApplication extends UnansweredQuestionUsecase {
  getUnansweredQuestionsByUsername = async (
    username: string,
  ): Promise<DetailedQuestion[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const questions = await this.questionRepository.getDetailedQuestions({
      username,
      status: 'unanswered',
    });

    const formattedQuestions = questions.map((question) => formatQuestion(question, {
      truncateAnswer: true,
    }));
    return formattedQuestions;
  };
}

export default UnansweredQuestionUsecaseApplication;
