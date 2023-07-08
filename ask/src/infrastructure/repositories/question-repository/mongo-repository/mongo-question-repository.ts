import QuestionModel from './mongo-question-model';
import IQuestionRepository, {
  QuestionFilters,
} from '../../../../domain/repositories/question-repository';
import questionModelToQuestion from './mongo-question-mapper';
import {
  Question,
  QuestionPayload,
} from '../../../../domain/entities/question/question-entities';
import createQuestionRepositoryQuery from './mongo-question-utils';

class MongoQuestionRepository implements IQuestionRepository {
  getQuestion = async (filters: QuestionFilters): Promise<Question | null> => {
    const query = createQuestionRepositoryQuery(filters);
    const questionModel = await QuestionModel.findOne(query);
    if (!questionModel) return null;
    const question = questionModelToQuestion(questionModel);
    return question;
  };

  getQuestions = async (filters: QuestionFilters): Promise<Question[]> => {
    const query = createQuestionRepositoryQuery(filters);
    const questionModels = await QuestionModel.find(query);
    const questions = questionModels.map((model) => questionModelToQuestion(model));
    return questions;
  };

  createQuestion = async (payload: QuestionPayload): Promise<Question> => {
    const questionModel = new QuestionModel({
      views: payload.views,
      asked_at: payload.askedAt,
      asked_by: payload.askedBy,
      username: payload.username,
      question: payload.question,
      is_deleted: false,
    });
    const storedQuestion = await questionModel.save();
    const question = questionModelToQuestion(storedQuestion);
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
    const question = questionModelToQuestion(updatedQuestion);
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
    const question = questionModelToQuestion(updatedQuestion);
    return question;
  };
}

export default MongoQuestionRepository;
