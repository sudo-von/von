import {
  DetailedQuestion,
} from '../../../../domain/entities/question-entity/question-entities';
import {
  QuestionRepositorySchema,
} from '../../../../domain/repositories/question-repository/question-repository-schema';
import answerDocumentToAnswer from '../../answer-repository/mongo-answer-repository/mongo-answer-repository-mapper';

const questionDocumentToQuestion = (
  document: QuestionRepositorySchema,
): DetailedQuestion => ({
  id: document.id,
  views: document.views,
  askedAt: document.asked_at,
  askedBy: document.asked_by,
  username: document.username,
  question: document.question,
  answer: document.answer && answerDocumentToAnswer(document.answer),
});

export default questionDocumentToQuestion;
