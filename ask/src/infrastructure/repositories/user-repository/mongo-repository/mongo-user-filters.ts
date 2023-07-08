import {
  FilterQuery,
} from 'mongoose';
import {
  UserSchema,
} from '../user-repository-schema';
import {
  UserFilters,
} from '../../../../domain/repositories/user/user-filters';

const createQuestionDocumentQuery = (filters?: UserFilters): FilterQuery<UserSchema> => ({
  _id: filters && filters._id,
  username: filters && filters.username,
});

export default createQuestionDocumentQuery;
