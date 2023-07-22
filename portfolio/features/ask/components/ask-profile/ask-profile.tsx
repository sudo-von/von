import { FC } from "react";
import AskName from "./components/ask-name/ask-name";
import AskAvatar from "./components/ask-avatar/ask-avatar";
import AskMetrics from "./components/ask-metrics/ask-metrics";
import AskInterest from "./components/ask-interest/ask-interest";
import AskPosition from "./components/ask-position/ask-position";

type AskProfileProps = {
  name: string;
  avatar: string;
  position: string;
  interest: string;
  metrics: {
    totalViews: number;
    totalQuestions: number;
    totalAnswers: number;
  };
};

const AskProfile: FC<AskProfileProps> = ({
  name,
  avatar,
  metrics,
  interest,
  position,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-10">
      <div className="relative grayscale w-36 h-36 md:w-40 md:h-40 lg:h-44 lg:w-44">
        <AskAvatar src={avatar} alt={name} />
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col gap-2.5 sm:gap-4 text-center sm:text-start">
          <AskName>{name}</AskName>
          <AskPosition>{position}</AskPosition>
          <AskInterest>{interest}</AskInterest>
          <AskMetrics
            totalViews={metrics.totalViews}
            totalQuestions={metrics.totalQuestions}
            totalAnswers={metrics.totalAnswers}
          />
        </div>
      </div>
    </div>
  );
};

export default AskProfile;
