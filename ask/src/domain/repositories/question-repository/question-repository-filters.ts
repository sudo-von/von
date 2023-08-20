type Status =
| 'answered'
| 'unanswered'
| 'both';

export type QuestionRepositoryFilters = Partial<{
  id: string;
  status: Status;
  username: string;
  isDeleted: boolean;
}>;
