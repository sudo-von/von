import {
  Schema,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';

const userRepositorySchema = new Schema<UserRepositorySchema>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default userRepositorySchema;
