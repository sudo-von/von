import { formatDate } from "@services/date-service/date.service";
import { UnansweredQuestionProps } from "@ask-panel/components/unanswered-question/unanswered-question";
import { UnansweredQuestionResponse } from "@ask/services/unanswered-question-service/unanswered-question.service.responses";

export const toUnansweredQuestionProps = (
  unansweredQuestionResponse: UnansweredQuestionResponse
): UnansweredQuestionProps => ({
  askedAt: formatDate(new Date(unansweredQuestionResponse.asked_at)),
  id: unansweredQuestionResponse.id,
  question: unansweredQuestionResponse.question,
});
