import { formatDate } from "@services/date-service/date.service";
import { AnsweredQuestionProps } from "@ask/components/answered-question/answered-question";
import { AnsweredQuestionResponse } from "@ask/services/answered-question-service/answered-question.service.responses";

export const toAnsweredQuestionProps = (
  answeredQuestionResponse: AnsweredQuestionResponse
): AnsweredQuestionProps => ({
  answer: answeredQuestionResponse.answer.answer,
  answeredAt: formatDate(new Date(answeredQuestionResponse.answer.answered_at)),
  id: answeredQuestionResponse.id,
  question: answeredQuestionResponse.question,
});
