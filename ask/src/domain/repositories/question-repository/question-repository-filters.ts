type QuestionRepositoryStatus =
| 'answered'
| 'unanswered'
| 'both';

export type QuestionRepositoryFilters = Partial<{
  id: string;
  username: string;
  isDeleted: boolean;
  status: QuestionRepositoryStatus;
}>;
