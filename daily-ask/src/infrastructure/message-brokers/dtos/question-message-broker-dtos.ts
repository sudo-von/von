type QuestionMessageBroker = Readonly<{
  question: string;
  asked_by: string;
}>;

export type CreateQuestionMessageBroker = QuestionMessageBroker;
