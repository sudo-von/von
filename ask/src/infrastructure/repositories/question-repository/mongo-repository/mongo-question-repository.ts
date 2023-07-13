import QuestionModel from './mongo-question-model';
import questionDocumentToQuestion from './mongo-question-mapper';
import {
  DetailedQuestion,
  CreateDetailedQuestion,
  PartialDetailedQuestion,
} from '../../../../domain/entities/question-entity/question-entities';
import createQuestionRepositoryQuery from './mongo-question-repository-query';
import {
  QuestionRepositoryFilters,
} from '../../../../domain/repositories/question-repository/question-repository-filters';
import IQuestionRepository from '../../../../domain/repositories/question-repository/question-repository';

class MongoQuestionRepository implements IQuestionRepository {
  getDetailedQuestion = async (
    filters?: QuestionRepositoryFilters,
  ): Promise<DetailedQuestion | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const questionDocument = await QuestionModel.findOne(query);
    if (!questionDocument) return null;
    const question = questionDocumentToQuestion(questionDocument);
    return question;
  };

  getDetailedQuestions = async (
    filters?: QuestionRepositoryFilters,
  ): Promise<DetailedQuestion[]> => {
    const query = createQuestionRepositoryQuery(filters);
    const questionDocuments = await QuestionModel.find(query);
    const questions = questionDocuments.map((model) => questionDocumentToQuestion(model));
    return questions;
  };

  createDetailedQuestion = async (
    payload: CreateDetailedQuestion,
  ): Promise<DetailedQuestion> => {
    const questionDocument = new QuestionModel({
      views: payload.views,
      asked_at: payload.askedAt,
      asked_by: payload.askedBy,
      username: payload.username,
      question: payload.question,
      is_deleted: false,
    });
    const storedQuestion = await questionDocument.save();
    const question = questionDocumentToQuestion(storedQuestion);
    return question;
  };

  deleteDetailedQuestion = async (
    filters?: QuestionRepositoryFilters,
  ): Promise<DetailedQuestion | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const deletedQuestion = await QuestionModel.findOneAndUpdate(query, {
      is_deleted: true,
    }, {
      new: true,
    });
    if (!deletedQuestion) return null;
    const question = questionDocumentToQuestion(deletedQuestion);
    return question;
  };

  updateDetailedQuestion = async (
    payload: PartialDetailedQuestion,
    filters?: QuestionRepositoryFilters,
  ): Promise<DetailedQuestion | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const updatedQuestion = await QuestionModel.findOneAndUpdate(query, {
      views: payload.views,
      asked_at: payload.askedAt,
      asked_by: payload.askedBy,
      username: payload.username,
      question: payload.question,
      answer: payload.answer && {
        answer: payload.answer.answer,
        answered_at: payload.answer.answeredAt,
      },
    }, {
      new: true,
    });
    if (!updatedQuestion) return null;
    const question = questionDocumentToQuestion(updatedQuestion);
    return question;
  };

  updateDetailedQuestions = async (
    payload: PartialDetailedQuestion,
    filters?: QuestionRepositoryFilters,
  ): Promise<void> => {
    const query = createQuestionRepositoryQuery(filters);
    await QuestionModel.updateMany(query, {
      views: payload.views,
      askedAt: payload.askedAt,
      askedBy: payload.askedBy,
      username: payload.username,
      question: payload.question,
      answer: payload.answer && {
        answer: payload.answer.answer,
        answered_at: payload.answer.answeredAt,
      },
    });
  };

  deleteDetailedAnswer = async (
    filters?: QuestionRepositoryFilters,
  ): Promise<DetailedQuestion | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const deletedAnswer = await QuestionModel.findOneAndUpdate(query, {
      $unset: {
        answer: 1,
      },
    }, {
      new: true,
    });
    if (!deletedAnswer) return null;
    const question = questionDocumentToQuestion(deletedAnswer);
    return question;
  };
}

export default MongoQuestionRepository;
