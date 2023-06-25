import {
  ProfileModel,
  profileModelToProfileEntity,
} from './profile-mongo-schema';
import {
  CreateProfileEntity,
  UpdateProfileEntity,
  ProfileEntity,
} from '../../../../domain/entities/profile-entity';
import IProfileRepository from '../../../../domain/repositories/profile-repository';

class ProfileMongoRepository implements IProfileRepository {
  getProfiles = async (): Promise<ProfileEntity[]> => {
    const profileModels = await ProfileModel.find();
    const profileEntities = profileModels.map((model) => profileModelToProfileEntity(model));
    return profileEntities;
  };

  getProfileByUsername = async (username: string): Promise<ProfileEntity | null> => {
    const userModel = await ProfileModel.findOne({ username });
    if (!userModel) return null;
    const profileEntity = profileModelToProfileEntity(userModel);
    return profileEntity;
  };

  createProfile = async (payload: CreateProfileEntity): Promise<ProfileEntity> => {
    const profileModel = new ProfileModel({
      quote: payload.quote,
      interest: payload.interest,
      username: payload.username,
      position: payload.position,
    });
    const storedProfile = await profileModel.save();
    const profileEntity = profileModelToProfileEntity(storedProfile);
    return profileEntity;
  };

  updateProfileByUsername = async (
    username: string,
    payload: UpdateProfileEntity,
  ): Promise<ProfileEntity | null> => {
    const updatedProfile = await ProfileModel.findOneAndUpdate({ username }, {
      $set: {
        quote: payload.quote,
        interest: payload.interest,
        username: payload.username,
        position: payload.position,
      },
    });
    if (!updatedProfile) return null;
    const profileEntity = profileModelToProfileEntity(updatedProfile);
    return profileEntity;
  };
}

export default ProfileMongoRepository;
