import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  QuestionNotFoundError,
  QuestionDeleteFailedError,
} from '../../domain/entities/question-entity/question-errors';
import {
  DetailedQuestion,
  CreateQuestion,
} from '../../domain/entities/question-entity/question-entities';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import formatQuestion from '../../domain/entities/question-entity/question-utils';
import validateQuestionCreation from '../../domain/entities/question-entity/question-validations/create-question-validations';
import validateBroadcastQuestionCreation from '../../domain/entities/question-entity/question-validations/create-broadcast-question-validations';

class QuestionUsecaseApplication extends QuestionUsecase {
  deleteQuestionById = async (
    id: string,
  ): Promise<DetailedQuestion> => {
    const question = await this.questionRepository.getDetailedQuestion({ id, status: 'both' });
    if (!question) throw QuestionNotFoundError;

    const deletedQuestion = await this.questionRepository.deleteDetailedQuestion({ id });
    if (!deletedQuestion) throw QuestionDeleteFailedError;

    return deletedQuestion;
  };

  getQuestionsByUsername = async (
    username: string,
  ): Promise<DetailedQuestion[]> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const questions = await this.questionRepository.getDetailedQuestions({
      username,
      status: 'both',
    });

    const formattedQuestions = questions.map((question) => formatQuestion(question, {
      truncateAnswer: true,
    }));
    return formattedQuestions;
  };

  CreateBroadcastQuestion = async (
    payload: CreateQuestion,
  ): Promise<void> => {
    validateBroadcastQuestionCreation(payload);

    const users = await this.userRepository.getUsers();

    await Promise.all(
      users.map((user) => this.questionRepository.createDetailedQuestion({
        views: 0,
        askedAt: new Date(),
        username: user.username,
        askedBy: payload.askedBy,
        question: payload.question,
      })),
    );
  };

  createQuestionByUsername = async (
    username: string,
    payload: CreateQuestion,
  ):Promise<DetailedQuestion> => {
    validateQuestionCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const createdQuestion = await this.questionRepository.createDetailedQuestion({
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
