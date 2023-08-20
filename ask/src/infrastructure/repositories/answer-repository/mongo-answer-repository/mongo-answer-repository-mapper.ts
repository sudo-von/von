import {
  DetailedAnswer,
} from '../../../../domain/entities/answer-entity/answer-entities';
import {
  AnswerRepositorySchema,
} from '../../../../domain/repositories/answer-repository/answer-repository-schema';

const answerDocumentToAnswer = (
  document: AnswerRepositorySchema,
): DetailedAnswer => ({
  answer: document.answer,
  answeredAt: document.answered_at,
});

export default answerDocumentToAnswer;
