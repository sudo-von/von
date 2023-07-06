import QuestionModel from './mongo-question-model';
import IQuestionRepository, {
  QuestionFilters,
} from '../../../../domain/repositories/question-repository';
import questionModelToQuestion from './mongo-question-mapper';
import {
  Question,
  QuestionPayload,
} from '../../../../domain/entities/question/question-entities';
import getQuestionRepositoryFilters from './mongo-question-utils';

class MongoQuestionRepository implements IQuestionRepository {
  getQuestionById = async (
    id: string,
    params: QuestionFilters,
  ): Promise<Question | null> => {
    const filters = getQuestionRepositoryFilters(params);

    const questionModel = await QuestionModel.findById(id, filters);
    if (!questionModel) return null;

    const question = questionModelToQuestion(questionModel);
    return question;
  };

  getQuestionsByUsername = async (
    username: string,
    params: QuestionFilters,
  ): Promise<Question[]> => {
    const filters = { ...getQuestionRepositoryFilters(params), username };

    const questionModels = await QuestionModel.find(filters);

    const questions = questionModels.map((model) => questionModelToQuestion(model));
    return questions;
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
