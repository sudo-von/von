import { FC } from "react";
import ProfileDetails, {
  ProfileDetailsProps,
} from "./profile-details/profile-details";
import Banner from "../../../common/components/banner/banner";

export type ProfileProps = {
  name: string;
  details: ProfileDetailsProps | null;
};

const Profile: FC<ProfileProps> = ({ name, details }) => {
  return (
    <>
      <Banner>{name}</Banner>
      {details && (
        <ProfileDetails
          quote={details.quote}
          interest={details.interest}
          position={details.position}
        />
      )}
    </>
  );
};

export default Profile;
