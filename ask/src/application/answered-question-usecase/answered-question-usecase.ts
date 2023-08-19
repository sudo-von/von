import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  formatQuestions,
} from '../../domain/entities/question-entity/question-utils';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionUpdateFailedError,
} from '../../domain/entities/question-entity/question-errors';
import {
  DetailedQuestion,
} from '../../domain/entities/question-entity/question-entities';
import AnsweredQuestionUsecase from '../../domain/usecases/answered-question-usecase/answered-question-usecase';

class AnsweredQuestionUsecaseApplication extends AnsweredQuestionUsecase {
  getAnsweredQuestionById = async (
    id: string,
  ): Promise<DetailedQuestion> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const updatedAnswer = await this.questionRepository.updateQuestion({
      views: question.views + 1,
    }, { id });
    if (!updatedAnswer) throw QuestionUpdateFailedError;

    return updatedAnswer;
  };

  getAnsweredQuestionsByUsername = async (
    username: string,
  ): Promise<DetailedQuestion[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestions({ username, status: 'answered' });

    const formatedQuestions = formatQuestions(questions);
    return formatedQuestions;
  };
}

export default AnsweredQuestionUsecaseApplication;
