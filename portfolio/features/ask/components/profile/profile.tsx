import { FC } from "react";
import ProfileDetails, {
  ProfileDetailsProps,
} from "./components/profile-details/profile-details";
import ProfileMetrics, {
  ProfileMetricsProps,
} from "./components/profile-metrics/profile-metrics";
import ProfileName from "./components/profile-name/profile-name";
import ProfileAvatar from "./components/profile-picture/profile-picture";

export type ProfileProps = {
  name: string;
  avatar: string;
  username: string;
  metrics: ProfileMetricsProps;
  details: ProfileDetailsProps | null;
};

const Profile: FC<ProfileProps> = ({ name, avatar, details, metrics }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
      <ProfileAvatar alt="profile-avatar" src={avatar} />
      <div className="flex flex-col justify-center items-center lg:items-start gap-4">
        <ProfileName>{name}</ProfileName>
        {details && (
          <ProfileDetails
            interest={details.interest}
            position={details.position}
          />
        )}
        <ProfileMetrics
          totalViews={metrics.totalViews}
          totalAnswers={metrics.totalAnswers}
          totalQuestions={metrics.totalQuestions}
        />
      </div>
    </div>
  );
};

export default Profile;
