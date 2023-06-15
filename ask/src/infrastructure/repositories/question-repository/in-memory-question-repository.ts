import crypto from 'crypto';
import IQuestionRepository from '../../../domain/repositories/question-repository';
import { CreateQuestionEntity, QuestionEntity } from '../../../domain/entities/question-entity';

class InMemoryQuestionRepository implements IQuestionRepository {
  private questionsInMemory: QuestionEntity[] = [
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

  getAnswersByUsername = async (username: string): Promise<QuestionEntity[]> => {
    const questions: QuestionEntity[] = this.questionsInMemory.filter(
      (p) => p.username === username && p.answer,
    );
    return questions;
  };

  getQuestionsByUsername = async (username: string): Promise<QuestionEntity[]> => {
    const questions: QuestionEntity[] = this.questionsInMemory.filter(
      (p) => p.username === username && !p.answer,
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
