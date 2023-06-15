import { CreateQuestionEntity, QuestionEntity } from '../domain/entities/question-entity';
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

    const question: QuestionEntity = {
      id: answeredQuestion.id,
      question: answeredQuestion.question,
      username: answeredQuestion.username,
      askedAt: answeredQuestion.askedAt,
      answer: answeredQuestion.answer,
      views: answeredQuestion.views,
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

    const detailedQuestions = await this.questionRepository.getAllQuestionsByUser(
      requestedUser,
    );

    const questions: QuestionEntity[] = detailedQuestions.map((q) => ({
      id: q.id,
      question: q.question,
      username: q.username,
      askedAt: q.askedAt,
      answer: q.answer,
      views: q.views,
    }));

    return questions;
  };

  getAnsweredQuestionsByUser = async (username: string): Promise<QuestionEntity[]> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const detailedAnswers = await this.questionRepository.getAnsweredQuestionsByUser(username);

    const answeredQuestions: QuestionEntity[] = detailedAnswers.map((answer) => ({
      id: answer.id,
      askedAt: answer.askedAt,
      question: answer.question,
      username: answer.username,
      answer: answer.answer,
      views: answer.views,
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
    }));

    return unansweredQuestions;
  };

  createQuestion = async (payload: CreateQuestionEntity): Promise<QuestionEntity> => {
    const isValidQuestion = validateQuestion(payload.question);
    if (!isValidQuestion) throw InvalidQuestionLengthError;

    const profile = await this.profileRepository.getProfileByUsername(payload.username);
    if (!profile) throw ProfileNotFoundError;

    const createdQuestion = await this.questionRepository.createQuestion(payload);
    if (!createdQuestion) throw QuestionCreationFailedError;

    const unansweredQuestions: QuestionEntity = {
      id: createdQuestion.id,
      question: createdQuestion.question,
      username: createdQuestion.username,
      askedAt: createdQuestion.askedAt,
      views: createdQuestion.views,
    };

    return unansweredQuestions;
  };
}

export default QuestionUsecaseApplication;
