import { FC } from "react";
import Name from "../Name/Name";
import Metrics from "../Metrics/Metrics";
import Interest from "../Interest/Interest";
import Position from "../Position/Position";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

type ProfileProps = {
  name: string;
  position: string;
  interest: string;
  profile_picture: string;
  metrics: {
    total_views: number;
    total_questions: number;
    total_answers: number;
  };
};

const Profile: FC<ProfileProps> = ({
  name,
  metrics,
  position,
  interest,
  profile_picture,
}) => {
  const { total_answers, total_questions, total_views } = metrics;
  return (
    <div className="flex justify-center gap-10">
      <ProfilePicture url={profile_picture} alt={name} />
      <div>
        <div className="mb-4">
          <Name>{name}</Name>
        </div>
        <div className="mb-4">
          <Position>{position}</Position>
        </div>
        <div className="mb-4">
          <Interest>{interest}</Interest>
        </div>
        <Metrics
          total_answers={total_answers}
          total_questions={total_questions}
          total_views={total_views}
        />
      </div>
    </div>
  );
};

export default Profile;
