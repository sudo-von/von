import {
  DetailedAnswerResponse,
} from './answer-response-entities';
import {
  DetailedAnswer,
} from '../../../../../domain/entities/answer-entity/answer-entities';

const detailedAnswerToResponse = (
  answer: DetailedAnswer,
): DetailedAnswerResponse => ({
  answer: answer.answer,
  answered_at: answer.answeredAt,
});

export default detailedAnswerToResponse;
