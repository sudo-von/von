export type QuestionFilters = {
  id?: string;
  username?: string;
  isDeleted?: boolean;
  status: 'answered' | 'unanswered' | 'both';
};
