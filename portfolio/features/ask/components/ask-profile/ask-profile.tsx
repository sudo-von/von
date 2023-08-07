import { FC } from "react";
import AskName from "./components/ask-name/ask-name";
import AskAvatar from "./components/ask-avatar/ask-avatar";
import AskMetrics from "./components/ask-metrics/ask-metrics";
import AskInterest from "./components/ask-interest/ask-interest";
import AskPosition from "./components/ask-position/ask-position";
import Banner from "../../../common/components/banner/banner";
import Title from "../../../common/components/title/title";
import Subtitle from "../../../common/components/subtitle/subtitle";

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
    <div className="flex flex-col lg:flex-row items-center lg:gap-8">
      <div className="relative grayscale w-36 h-36 md:w-40 md:h-40 lg:h-44 lg:w-44">
        <AskAvatar src={avatar} alt={name} />
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col gap-2.5 sm:gap-4 text-center sm:text-start">
          <Banner>{name}</Banner>
          <Subtitle>{interest}</Subtitle>
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
