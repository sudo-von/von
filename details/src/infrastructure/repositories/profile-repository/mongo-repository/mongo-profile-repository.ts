import ProfileModel from './mongo-profile-model';
import {
  ProfileEntity,
  CreateProfileEntity,
  UpdateProfileEntity,
} from '../../../../domain/entities/profile/profile-entity';
import profileModelToProfileEntity from './mongo-profile-mapper';
import IProfileRepository from '../../../../domain/repositories/profile-repository';

class MongoProfileRepository implements IProfileRepository {
  getProfiles = async (): Promise<ProfileEntity[]> => {
    const profileModels = await ProfileModel.find();
    const profileEntities = profileModels.map((model) => profileModelToProfileEntity(model));
    return profileEntities;
  };

  getProfileByUsername = async (username: string): Promise<ProfileEntity | null> => {
    const profileModel = await ProfileModel.findOne({ username });
    if (!profileModel) return null;
    const profileEntity = profileModelToProfileEntity(profileModel);
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
    }, {
      new: true,
    });
    if (!updatedProfile) return null;
    const profileEntity = profileModelToProfileEntity(updatedProfile);
    return profileEntity;
  };
}

export default MongoProfileRepository;
