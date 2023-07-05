import QuestionModel from './mongo-question-model';
import questionModelToQuestion from './mongo-question-mapper';
import {
  Question,
  QuestionPayload,
} from '../../../../domain/entities/question/question-entities';
import IQuestionRepository from '../../../../domain/repositories/question-repository';

class MongoQuestionRepository implements IQuestionRepository {
  getQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const questionModels = await QuestionModel.find({ username });
    const questions = questionModels.map((model) => questionModelToQuestion(model));
    return questions;
  };

  getAnsweredQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const questionModels = await QuestionModel.find({
      username,
      answer: { $exists: true },
    });
    const questions = questionModels.map((model) => questionModelToQuestion(model));
    return questions;
  };

  getUnansweredQuestionsByUsername = async (username: string): Promise<Question[]> => {
    const questionModels = await QuestionModel.find({
      username,
      answer: { $exists: false },
    });
    const questions = questionModels.map((model) => questionModelToQuestion(model));
    return questions;
  };

  getAnsweredQuestionById = async (id: string): Promise<Question | null> => {
    const questionModel = await QuestionModel.findById(id, {
      answer: { $exists: false },
    });
    if (!questionModel) return null;
    const question = questionModelToQuestion(questionModel);
    return question;
  };

  createQuestion = async (payload: QuestionPayload): Promise<Question> => {
    const questionModel = new QuestionModel({
      views: payload.views,
      askedAt: payload.askedAt,
      askedBy: payload.askedBy,
      username: payload.username,
      question: payload.question,
    });
    const storedQuestion = await questionModel.save();
    const question = questionModelToQuestion(storedQuestion);
    return question;
  };

  updateQuestionById = async (id: string, payload: QuestionPayload): Promise<Question | null> => {
    const updatedQuestion = await QuestionModel.findOneAndUpdate({ _id: id }, {
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
}

export default MongoQuestionRepository;
