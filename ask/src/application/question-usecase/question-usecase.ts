import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  QuestionNotFoundError,
  QuestionDeleteFailedError,
} from '../../domain/entities/question-entity/question-errors';
import {
  Question,
  CreateQuestion,
} from '../../domain/entities/question-entity/question-entities';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import formatQuestion from '../../domain/entities/question-entity/question-formatters';
import validateQuestionCreation from '../../domain/entities/question-entity/question-validations/create-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  deleteQuestionById = async (id: string): Promise<Question> => {
    const question = await this.questionRepository.getQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    const deletedQuestion = await this.questionRepository.deleteQuestion({ id });
    if (!deletedQuestion) throw QuestionDeleteFailedError;

    const formattedQuestion = formatQuestion(deletedQuestion, { formatAnswer: false });
    return formattedQuestion;
  };

  createGlobalQuestion = async (payload: CreateQuestion): Promise<void> => {
    validateQuestionCreation(payload);

    const users = await this.userRepository.getUsers();

    await Promise.all(
      users.map((user) => this.questionRepository.createQuestion({
        views: 0,
        askedAt: new Date(),
        username: user.username,
        askedBy: payload.askedBy,
        question: payload.question,
      })),
    );
  };

  getQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const questions = await this.questionRepository.getQuestions({ username, status: 'both' });

    const formattedQuestions = questions.map((question) => formatQuestion(question));
    return formattedQuestions;
  };

  createQuestionByUsername = async (
    username: string,
    payload: CreateQuestion,
  ):Promise<Question> => {
    validateQuestionCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const createdQuestion = await this.questionRepository.createQuestion({
      views: 0,
      askedAt: new Date(),
      askedBy: payload.askedBy,
      question: payload.question,
      username,
    });

    const formattedQuestion = formatQuestion(createdQuestion, { formatAnswer: false });
    return formattedQuestion;
  };
}

export default QuestionUsecaseApplication;
