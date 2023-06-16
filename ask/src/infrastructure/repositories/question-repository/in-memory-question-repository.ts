import crypto from 'crypto';
import IQuestionRepository from '../../../domain/repositories/question-repository';
import { CreateQuestionEntity, QuestionEntity, UpdateQuestionEntity } from '../../../domain/entities/question-entity';

class InMemoryQuestionRepository implements IQuestionRepository {
  private questionsInMemory: QuestionEntity[] = [
    {
      id: crypto.randomBytes(8).toString('hex'),
      username: 'sudo_von',
      question: 'How is it going?',
      askedAt: new Date(),
      askedBy: '::1',
      views: 10,
    },
    {
      id: crypto.randomBytes(8).toString('hex'),
      username: 'sudo_von',
      question: 'How long have you been studying...?',
      askedAt: new Date(),
      askedBy: '::1',
      views: 0,
      answer: {
        answer: "It's been a long time since I...",
        answeredAt: new Date(),
      },
    },
  ];

  getAnsweredQuestionById = async (id: string): Promise<QuestionEntity | null> => {
    const answeredQuestion = this.questionsInMemory.find(
      (p) => p.id === id && p.answer,
    ) || null;
    return answeredQuestion;
  };

  getAnsweredQuestionsByUser = async (username: string): Promise<QuestionEntity[]> => {
    const questions: QuestionEntity[] = this.questionsInMemory.filter(
      (p) => p.username === username && p.answer,
    );
    return questions;
  };

  getAllQuestionsByUser = async (username: string): Promise<QuestionEntity[]> => {
    const questions: QuestionEntity[] = this.questionsInMemory.filter(
      (p) => p.username === username,
    );
    return questions;
  };

  getUnansweredQuestionsByUser = async (username: string): Promise<QuestionEntity[]> => {
    const questions: QuestionEntity[] = this.questionsInMemory.filter(
      (p) => p.username === username && !p.answer,
    );
    return questions;
  };

  createQuestion = async (
    payload: CreateQuestionEntity,
  ): Promise<QuestionEntity | null> => {
    const question: QuestionEntity = {
      ...payload,
      id: crypto.randomBytes(8).toString('hex'),
    };
    this.questionsInMemory.push(question);
    return question;
  };

  updateQuestionById = async (
    id: string,
    payload: UpdateQuestionEntity,
  ): Promise<void> => {
    this.questionsInMemory = this.questionsInMemory.map(
      (p) => {
        if (p.id !== id) return p;
        return {
          ...payload,
          id,
        };
      },
    );
  };
}

export default InMemoryQuestionRepository;
