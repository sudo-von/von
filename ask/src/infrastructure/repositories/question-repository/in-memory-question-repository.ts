import crypto from 'crypto';
import IQuestionRepository from '../../../domain/repositories/question-repository';
import { CreateQuestion, Question, UpdateQuestion } from '../../../domain/entities/question/question-entities';

class InMemoryQuestionRepository implements IQuestionRepository {
  private questionsInMemory: Question[] = [
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

  getAnsweredQuestionById = async (id: string): Promise<Question | null> => {
    const answeredQuestion = this.questionsInMemory.find(
      (p) => p.id === id && p.answer,
    ) || null;
    return answeredQuestion;
  };

  getAnsweredQuestionsByUser = async (username: string): Promise<Question[]> => {
    const questions: Question[] = this.questionsInMemory.filter(
      (p) => p.username === username && p.answer,
    );
    return questions;
  };

  getAllQuestionsByUser = async (username: string): Promise<Question[]> => {
    const questions: Question[] = this.questionsInMemory.filter(
      (p) => p.username === username,
    );
    return questions;
  };

  getUnansweredQuestionsByUser = async (username: string): Promise<Question[]> => {
    const questions: Question[] = this.questionsInMemory.filter(
      (p) => p.username === username && !p.answer,
    );
    return questions;
  };

  createQuestion = async (
    payload: CreateQuestion,
  ): Promise<Question | null> => {
    const question: Question = {
      ...payload,
      id: crypto.randomBytes(8).toString('hex'),
    };
    this.questionsInMemory.push(question);
    return question;
  };

  updateQuestionById = async (
    id: string,
    payload: UpdateQuestion,
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
