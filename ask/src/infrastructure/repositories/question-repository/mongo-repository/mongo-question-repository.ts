import QuestionModel from './mongo-question-model';
import questionModelToQuestion from './mongo-question-mapper';
import {
  Question,
  CreateQuestion,
} from '../../../../domain/entities/question/question-entities';
import IQuestionRepository from '../../../../domain/repositories/question-repository';

class MongoQuestionRepository implements IQuestionRepository {
  createQuestion = async (payload: CreateQuestion): Promise<Question> => {
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
}

export default MongoQuestionRepository;
