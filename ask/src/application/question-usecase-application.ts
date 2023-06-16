import { CreateQuestionEntity, QuestionEntity, UpdateQuestionEntity } from '../domain/entities/question-entity';
import { validateQuestion } from '../domain/entities/validations/question-validations';
import {
  InvalidQuestionLengthError,
  QuestionCreationFailedError,
  ProfileNotFoundError,
  PermissionDeniedError,
  AnswerNotFoundError,
} from '../domain/errors/error-factories';
import QuestionUsecase from '../domain/usecases/question-usecase';

class QuestionUsecaseApplication extends QuestionUsecase {
  getAnsweredQuestionById = async (id: string): Promise<QuestionEntity> => {
    const answeredQuestion = await this.questionRepository.getAnsweredQuestionById(id);
    if (!answeredQuestion) throw AnswerNotFoundError;

    const updatedQuestion: UpdateQuestionEntity = {
      question: answeredQuestion.question,
      username: answeredQuestion.username,
      askedAt: answeredQuestion.askedAt,
      answer: answeredQuestion.answer,
      views: answeredQuestion.views + 1,
      askedBy: answeredQuestion.askedBy,
    };

    await this.questionRepository.updateQuestionById(id, updatedQuestion);

    const question: QuestionEntity = {
      id,
      question: updatedQuestion.question,
      username: updatedQuestion.username,
      askedAt: updatedQuestion.askedAt,
      answer: updatedQuestion.answer,
      views: updatedQuestion.views,
      askedBy: updatedQuestion.askedBy,
    };

    return question;
  };

  getAllQuestionsByUser = async (
    requestingUser: string,
    requestedUser: string,
  ): Promise<QuestionEntity[]> => {
    if (requestingUser !== requestedUser) throw PermissionDeniedError;

    const profile = await this.profileRepository.getProfileByUsername(requestedUser);
    if (!profile) throw ProfileNotFoundError;

    const questions = await this.questionRepository.getAllQuestionsByUser(
      requestedUser,
    );

    const allQuestions: QuestionEntity[] = questions.map((q) => ({
      id: q.id,
      question: q.question,
      username: q.username,
      askedAt: q.askedAt,
      answer: q.answer,
      views: q.views,
      askedBy: q.askedBy,
    }));

    return allQuestions;
  };

  getAnsweredQuestionsByUser = async (username: string): Promise<QuestionEntity[]> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const answers = await this.questionRepository.getAnsweredQuestionsByUser(username);

    const answeredQuestions: QuestionEntity[] = answers.map((answer) => ({
      id: answer.id,
      askedAt: answer.askedAt,
      question: answer.question,
      username: answer.username,
      answer: answer.answer,
      views: answer.views,
      askedBy: answer.askedBy,
    }));

    return answeredQuestions;
  };

  getUnansweredQuestionsByUser = async (
    requestingUser: string,
    requestedUser: string,
  ): Promise<QuestionEntity[]> => {
    if (requestingUser !== requestedUser) throw PermissionDeniedError;

    const profile = await this.profileRepository.getProfileByUsername(requestedUser);
    if (!profile) throw ProfileNotFoundError;

    const detailedQuestions = await this.questionRepository.getUnansweredQuestionsByUser(
      requestedUser,
    );

    const unansweredQuestions: QuestionEntity[] = detailedQuestions.map((q) => ({
      id: q.id,
      question: q.question,
      username: q.username,
      askedAt: q.askedAt,
      views: q.views,
      askedBy: q.askedBy,
    }));

    return unansweredQuestions;
  };

  createQuestion = async (payload: CreateQuestionEntity): Promise<QuestionEntity> => {
    const isValidQuestion = validateQuestion(payload.question);
    if (!isValidQuestion) throw InvalidQuestionLengthError;

    const profile = await this.profileRepository.getProfileByUsername(payload.username);
    if (!profile) throw ProfileNotFoundError;

    const question = await this.questionRepository.createQuestion(payload);
    if (!question) throw QuestionCreationFailedError;

    const questionEntity: QuestionEntity = {
      id: question.id,
      question: question.question,
      username: question.username,
      askedAt: question.askedAt,
      views: question.views,
      askedBy: question.askedBy,
    };

    return questionEntity;
  };
}

export default QuestionUsecaseApplication;
