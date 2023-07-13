import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionUpdateFailedError,
} from '../../domain/entities/question-entity/question-errors';
import {
  DetailedQuestion,
} from '../../domain/entities/question-entity/question-entities';
import formatQuestion from '../../domain/entities/question-entity/question-utils';
import AnsweredQuestionUsecase from '../../domain/usecases/answered-question-usecase/answered-question-usecase';

class AnsweredQuestionUsecaseApplication extends AnsweredQuestionUsecase {
  getAnsweredQuestionById = async (
    id: string,
  ): Promise<DetailedQuestion> => {
    const question = await this.questionRepository.getDetailedQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const increasedViewsQuestion = await this.questionRepository.updateDetailedQuestion({
      views: question.views + 1,
    }, { id });
    if (!increasedViewsQuestion) throw QuestionUpdateFailedError;

    return increasedViewsQuestion;
  };

  getAnsweredQuestionsByUsername = async (
    username: string,
  ): Promise<DetailedQuestion[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const answeredQuestions = await this.questionRepository.getDetailedQuestions({
      username,
      status: 'answered',
    });

    const formattedQuestions = answeredQuestions.map((question) => formatQuestion(question, {
      truncateAnswer: true,
    }));
    return formattedQuestions;
  };
}

export default AnsweredQuestionUsecaseApplication;
