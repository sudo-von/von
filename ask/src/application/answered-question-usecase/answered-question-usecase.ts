import {
  UserNotFoundError,
} from '@entities/user-entity/user-errors';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionUpdateFailedError,
} from '@entities/question-entity/question-errors';
import {
  DetailedQuestion,
} from '@entities/question-entity/question-entities';
import formatQuestion from '@entities/question-entity/question-formatters';
import AnsweredQuestionUsecase from '@usecases/answered-question-usecase/answered-question-usecase';

class AnsweredQuestionUsecaseApplication extends AnsweredQuestionUsecase {
  getAnsweredQuestionById = async (id: string): Promise<DetailedQuestion> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const increasedViewsQuestion = await this.questionRepository.updateQuestion({
      views: question.views + 1,
      askedAt: question.askedAt,
      askedBy: question.askedBy,
      username: question.username,
      question: question.question,
      answer: question.answer,
    }, { id });
    if (!increasedViewsQuestion) throw QuestionUpdateFailedError;

    const formattedQuestion = formatQuestion(increasedViewsQuestion, { truncateAnswer: false });
    return formattedQuestion;
  };

  getAnsweredQuestionsByUsername = async (username: string): Promise<DetailedQuestion[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const answeredQuestions = await this.questionRepository.getQuestions({ username, status: 'answered' });

    const formattedQuestions = answeredQuestions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };
}

export default AnsweredQuestionUsecaseApplication;
