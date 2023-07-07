type QuestionMessageBroker = Readonly<{
  question: string;
  asked_by: string;
  username: string;
}>;

export type CreateQuestionMessageBroker = QuestionMessageBroker;
