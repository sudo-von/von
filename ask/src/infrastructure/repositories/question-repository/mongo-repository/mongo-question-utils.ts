import { FilterQuery } from 'mongoose';
import {
  QuestionFilters,
} from '../../../../domain/repositories/question-repository';
import {
  Question,
} from '../../../../domain/entities/question/question-entities';

const createQuestionRepositoryQuery = ({
  id,
  status,
  username,
  isDeleted = false,
}: QuestionFilters): FilterQuery<Question> => {
  let answer = {};
  if (status === 'answered') answer = { $exists: true };
  if (status === 'unanswered') answer = { $exists: false };

  const query = {
    _id: id,
    answer,
    username,
    isDeleted,
  };

  return query;
};

export default createQuestionRepositoryQuery;
