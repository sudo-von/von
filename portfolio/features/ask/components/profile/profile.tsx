import { FC, ReactNode } from "react";
import ProfileMetrics, {
  ProfileMetricsProps,
} from "./components/profile-metrics/profile-metrics";
import ProfilePicture, {
  ProfilePictureProps,
} from "./components/profile-picture/profile-picture";
import ProfileName from "./components/profile-name/profile-name";
import ProfileInterest from "./components/profile-interest/profile-interest";
import ProfilePosition from "./components/profile-position/profile-position";

export type ProfileProps = {
  name: ReactNode;
  position: ReactNode;
  interest: ReactNode;
  metrics: ProfileMetricsProps;
  profilePicture: ProfilePictureProps;
};

const Profile: FC<ProfileProps> = ({
  name,
  metrics,
  position,
  interest,
  profilePicture,
}) => {
  const { alt, src } = profilePicture;
  const { totalAnswers, totalQuestions, totalViews } = metrics;
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
      <ProfilePicture alt={alt} src={src} />
      <div className="flex flex-col justify-center items-center lg:items-start gap-4">
        <ProfileName>{name}</ProfileName>
        <ProfilePosition>{position}</ProfilePosition>
        <ProfileInterest>{interest}</ProfileInterest>
        <ProfileMetrics
          totalViews={totalViews}
          totalAnswers={totalAnswers}
          totalQuestions={totalQuestions}
        />
      </div>
    </div>
  );
};

export default Profile;
