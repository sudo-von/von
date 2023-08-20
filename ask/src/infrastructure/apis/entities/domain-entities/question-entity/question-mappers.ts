import {
  DetailedQuestionResponse,
} from './question-response-entities';
import detailedAnswerToResponse from '../answer-entity/answer-mappers';
import {
  DetailedQuestion,
} from '../../../../../domain/entities/question-entity/question-entities';

const detailedQuestionToResponse = (
  question: DetailedQuestion,
): DetailedQuestionResponse => ({
  id: question.id,
  views: question.views,
  asked_at: question.askedAt,
  username: question.username,
  question: question.question,
  answer: question.answer && detailedAnswerToResponse(question.answer),
});

export default detailedQuestionToResponse;
