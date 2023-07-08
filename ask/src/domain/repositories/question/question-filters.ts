export type QuestionFilterStatus = 'answered' | 'unanswered' | 'both';

export type QuestionFilters = Partial<{
  id: string;
  username: string;
  isDeleted: boolean;
  status: QuestionFilterStatus;
}>;
