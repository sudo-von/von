import crypto from 'crypto';
import IQuestionRepository from '../../../domain/repositories/question-repository';
import { CreateQuestionEntity, DetailedQuestionEntity } from '../../../domain/entities/question-entity';

class InMemoryQuestionRepository implements IQuestionRepository {
  private questionsInMemory: DetailedQuestionEntity[] = [
    {
      id: crypto.randomBytes(8).toString('hex'),
      username: 'sudo_von',
      question: 'How is it going?',
      askedAt: new Date(),
      askedBy: '::1',
    },
    {
      id: crypto.randomBytes(8).toString('hex'),
      username: 'sudo_von',
      question: 'How long have you been studying...?',
      askedAt: new Date(),
      askedBy: '::1',
      answer: {
        answer: "It's been a long time since I...",
        answeredAt: new Date(),
      },
    },
  ];

  getAnsweredQuestionsByUser = async (username: string): Promise<DetailedQuestionEntity[]> => {
    const questions: DetailedQuestionEntity[] = this.questionsInMemory.filter(
      (p) => p.username === username && p.answer,
    );
    return questions;
  };

  getUnansweredQuestionsByUser = async (username: string): Promise<DetailedQuestionEntity[]> => {
    const questions: DetailedQuestionEntity[] = this.questionsInMemory.filter(
      (p) => p.username === username && !p.answer,
    );
    return questions;
  };

  createQuestion = async (
    payload: CreateQuestionEntity,
  ): Promise<DetailedQuestionEntity | null> => {
    const question: DetailedQuestionEntity = {
      ...payload,
      id: crypto.randomBytes(8).toString('hex'),
    };
    this.questionsInMemory.push(question);
    return question;
  };
}

export default InMemoryQuestionRepository;
