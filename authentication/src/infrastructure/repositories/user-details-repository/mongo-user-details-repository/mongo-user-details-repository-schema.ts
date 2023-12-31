import {
  Schema,
} from 'mongoose';
import {
  PartialUserDetailsRepositorySchema,
} from '../../../../domain/repositories/user-details-repository/user-details-repository-schema';

const userDetailsRepositorySchema = new Schema<PartialUserDetailsRepositorySchema>({
  quote: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
}, {
  _id: false,
});

export default userDetailsRepositorySchema;
