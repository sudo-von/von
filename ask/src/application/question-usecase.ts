import {
  UserNotFoundError,
} from '../domain/entities/user/user-errors';
import {
  QuestionNotFoundError,
  QuestionDeleteFailedError,
} from '../domain/entities/question/question-errors';
import {
  Question,
  CreateQuestion,
} from '../domain/entities/question/question-entities';
import QuestionUsecase from '../domain/usecases/question-usecase/question-usecase';
import formatQuestion from '../domain/entities/question/question-formatters';
import validateQuestionCreation from '../domain/entities/question/validations/create-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  deleteQuestionById = async (id: string): Promise<Question> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    const deletedQuestion = await this.questionRepository.deleteQuestion({ id });
    if (!deletedQuestion) throw QuestionDeleteFailedError;

    const formattedQuestion = formatQuestion(deletedQuestion, { formatAnswer: false });
    return formattedQuestion;
  };

  createQuestion = async (payload: CreateQuestion): Promise<Question> => {
    validateQuestionCreation(payload);

    const user = await this.userRepository.getUser({ username: payload.username });
    if (!user) throw UserNotFoundError;

    const createdQuestion = await this.questionRepository.createQuestion({
      views: 0,
      askedAt: new Date(),
      askedBy: payload.askedBy,
      username: payload.username,
      question: payload.question,
    });

    const formattedQuestion = formatQuestion(createdQuestion, { formatAnswer: false });
    return formattedQuestion;
  };

  getQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestions({ username, status: 'both' });

    const formattedQuestions = questions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };
}

export default QuestionUsecaseApplication;
