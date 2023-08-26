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
  const { avatar, details, metrics, name } = profile;
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
        <Profile
          name={name}
          avatar={avatar}
          details={details}
          metrics={metrics}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { result: askUser } = await getAskUserByUsername("sudo_von");
    const { result: authenticationUser } = await getUserByUsername("sudo_von");

    const profile: ProfileProps = {
      name: authenticationUser.name,
      avatar: authenticationUser.avatar || null,
      details: authenticationUser.details || null,
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
  } catch (e) {
    return {
      props: {},
      redirect: {
        destination: "/500",
      },
    };
  }
};

export default Ask;
