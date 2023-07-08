export type QuestionRepositoryFilterStatus =
| 'answered'
| 'unanswered'
| 'both';

export type QuestionRepositoryFilters = Partial<{
  id: string;
  username: string;
  isDeleted: boolean;
  status: QuestionRepositoryFilterStatus;
}>;
