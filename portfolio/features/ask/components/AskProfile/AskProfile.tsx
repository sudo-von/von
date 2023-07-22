import { FC } from "react";
import AskName from "../AskName/AskName";
import AskAvatar from "../AskAvatar/AskAvatar";
import AskMetrics from "../AskMetrics/AskMetrics";
import AskInterest from "../AskInterest/AskInterest";
import AskPosition from "../AskPosition/AskPosition";

type AskProfileProps = {
  avatar: string;
  name: string;
  position: string;
  interest: string;
  metrics: {
    totalViews: number;
    totalQuestions: number;
    totalAnswers: number;
  };
};

const AskProfile: FC<AskProfileProps> = ({
  avatar,
  name,
  metrics,
  interest,
  position,
}) => {
  const { totalViews, totalQuestions, totalAnswers } = metrics;
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-10">
      <div className="relative grayscale w-36 h-36 md:w-40 md:h-40 lg:h-44 lg:w-44">
        <AskAvatar src={avatar} alt={name} />
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col gap-2.5 sm:gap-4 text-center sm:text-start">
          <AskName name={name} />
          <AskPosition position={position} />
          <AskInterest interest={interest} />
          <AskMetrics
            totalViews={totalViews}
            totalQuestions={totalQuestions}
            totalAnswers={totalAnswers}
          />
        </div>
      </div>
    </div>
  );
};

export default AskProfile;
