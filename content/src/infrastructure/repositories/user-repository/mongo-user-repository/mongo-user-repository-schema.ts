import {
  Schema,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';

const userRepositorySchema = new Schema<UserRepositorySchema>({
  user_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export default userRepositorySchema;
