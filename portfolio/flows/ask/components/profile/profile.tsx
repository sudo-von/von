import { FC } from "react";
import Name from "@ask/components/profile/components/name/name";
import Avatar from "@ask/components/profile/components/avatar/avatar";
import Details, { DetailsProps } from "@ask/components/profile/components/details/details";
import Metrics, { MetricsProps } from "@ask/components/profile/components/metrics/metrics";

export type ProfileProps = {
  avatar: string;
  details?: DetailsProps;
  metrics: MetricsProps;
  name: string;
  username: string;
};

const Profile: FC<ProfileProps> = ({ avatar, details, metrics, name }) => {
  const { totalAnswers, totalQuestions, totalViews } = metrics;
  return (
    <div className="flex flex-col lg:flex-row justify-start items-center gap-5">
      <Avatar alt="avatar" src={avatar} />
      <div className="flex flex-col justify-center items-center lg:items-start gap-2.5">
        <Name>{name}</Name>
        {details && (
          <Details interest={details.interest} position={details.position} />
        )}
        <Metrics
          totalAnswers={totalAnswers}
          totalQuestions={totalQuestions}
          totalViews={totalViews}
        />
      </div>
    </div>
  );
};

export default Profile;
