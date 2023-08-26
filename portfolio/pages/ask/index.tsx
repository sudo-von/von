import { NextPage, GetServerSideProps } from "next";
import Profile, {
  ProfileProps,
} from "../../features/ask/components/profile/profile";
import { getUserByUsername } from "../../services/authentication-service/user-service/user.service";
import { getAskUserByUsername } from "../../services/ask-service/ask-user-service/ask-user.service";

type AskProps = {
  profile: ProfileProps;
};

const Ask: NextPage<AskProps> = ({ profile }) => {
  const { interest, metrics, name, position, profilePicture } = profile;
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
        <Profile
          name={name}
          metrics={metrics}
          position={position}
          interest={interest}
          profilePicture={profilePicture}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { result: askUser } = await getAskUserByUsername("sudo_von");
  const { result: authUser } = await getUserByUsername("sudo_von");

  const profile = {
    name: authUser.name,
    position: authUser.details?.position || "",
    interest: authUser.details?.interest || "",
    profilePicture: {
      alt: authUser.name,
      src:
        authUser?.avatar ||
        "https://64.media.tumblr.com/d37f06dce99af14ea1687c19a5c17d1c/tumblr_n9qotn1mKF1s8jr81o1_250.gifv",
    },
    metrics: {
      totalViews: askUser.metrics.total_views,
      totalAnswers: askUser.metrics.total_answers,
      totalQuestions: askUser.metrics.total_questions,
    },
  };

  return {
    props: {
      profile,
    },
  };
};

export default Ask;
