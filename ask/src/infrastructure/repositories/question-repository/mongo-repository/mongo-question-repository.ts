import QuestionModel from './mongo-question-model';
import IQuestionRepository from '../../../../domain/repositories/question/question-repository';
import { QuestionFilters } from '../../../../domain/repositories/question/question-filters';
import {
  Question,
  QuestionPayload,
} from '../../../../domain/entities/question/question-entities';
import questionDocumentToQuestion from './mongo-question-mapper';
import createQuestionDocumentQuery from './mongo-question-utils';

class MongoQuestionRepository implements IQuestionRepository {
  getQuestion = async (filters: QuestionFilters): Promise<Question | null> => {
    const query = createQuestionDocumentQuery(filters);
    const questionDocument = await QuestionModel.findOne(query);
    if (!questionDocument) return null;
    const question = questionDocumentToQuestion(questionDocument);
    return question;
  };

  getQuestions = async (filters: QuestionFilters): Promise<Question[]> => {
    const query = createQuestionDocumentQuery(filters);
    const questionDocuments = await QuestionModel.find(query);
    const questions = questionDocuments.map((model) => questionDocumentToQuestion(model));
    return questions;
  };

  createQuestion = async (payload: QuestionPayload): Promise<Question> => {
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

  updateQuestionById = async (_id: string, payload: QuestionPayload): Promise<Question | null> => {
    const updatedQuestion = await QuestionModel.findOneAndUpdate({ _id }, {
      $set: {
        views: payload.views,
        askedAt: payload.askedAt,
        askedBy: payload.askedBy,
        username: payload.username,
        question: payload.question,
        answer: payload.answer,
      },
    }, {
      new: true,
    });
    if (!updatedQuestion) return null;
    const question = questionDocumentToQuestion(updatedQuestion);
    return question;
  };

  deleteQuestionById = async (_id: string): Promise<Question | null> => {
    const updatedQuestion = await QuestionModel.findOneAndUpdate({ _id }, {
      $set: {
        is_deleted: true,
      },
    }, {
      new: true,
    });
    if (!updatedQuestion) return null;
    const question = questionDocumentToQuestion(updatedQuestion);
    return question;
  };
}

export default MongoQuestionRepository;
