import {
  DetailedQuestion,
} from '../../entities/question-entity/question-entities';

type QuestionRepositoryStatus =
| 'answered'
| 'unanswered'
| 'both';

export type QuestionRepositoryFilters = Partial<Pick<DetailedQuestion, 'id' | 'username'> & {
  isDeleted: boolean;
  status: QuestionRepositoryStatus;
}>;
