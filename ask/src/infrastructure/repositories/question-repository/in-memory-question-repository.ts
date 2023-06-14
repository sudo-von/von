import crypto from 'crypto';
import IQuestionRepository from '../../../domain/repositories/question-repository';
import { CreateQuestionEntity, QuestionEntity } from '../../../domain/entities/question-entity';

class InMemoryQuestionRepository implements IQuestionRepository {
  private questionsInMemory: QuestionEntity[] = [];

  getQuestionsByUsername = async (username: string): Promise<QuestionEntity[]> => {
    const questions: QuestionEntity[] = this.questionsInMemory.filter(
      (p) => p.username === username,
    );
    return questions;
  };

  createQuestion = async (payload: CreateQuestionEntity): Promise<QuestionEntity | null> => {
    const question: QuestionEntity = {
      ...payload,
      id: crypto.randomBytes(8).toString('hex'),
    };
    this.questionsInMemory.push(question);
    return question;
  };
}

export default InMemoryQuestionRepository;
