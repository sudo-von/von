import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionUpdateFailedError,
} from '../../domain/entities/question-entity/question-errors';
import {
  Question,
} from '../../domain/entities/question-entity/question-entities';
import formatQuestion from '../../domain/entities/question-entity/question-formatters';
import AnsweredQuestionUsecase from '../../domain/usecases/answered-question-usecase/answered-question-usecase';

class AnsweredQuestionUsecaseApplication extends AnsweredQuestionUsecase {
  getAnsweredQuestionById = async (id: string): Promise<Question> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    if (!question.answer) throw QuestionNotAnsweredError;

    const updatedQuestion = await this.questionRepository.updateQuestion({
      views: question.views + 1,
      askedAt: question.askedAt,
      askedBy: question.askedBy,
      username: question.username,
      question: question.question,
      answer: question.answer,
    }, { id });
    if (!updatedQuestion) throw QuestionUpdateFailedError;

    const formattedQuestion = formatQuestion(updatedQuestion, { formatAnswer: false });
    return formattedQuestion;
  };

  getAnsweredQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestions({ username, status: 'answered' });

    const formattedQuestions = questions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };
}

export default AnsweredQuestionUsecaseApplication;
