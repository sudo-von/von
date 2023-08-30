import { NextPage } from "next";
import Profile, {
  ProfileProps,
} from "../flows/home/components/profile/profile";
import ContentList, {
  ContentListProps,
} from "../flows/home/components/content-list/content-list";

type HomeProps = ContentListProps & {
  profile: ProfileProps;
};

const Home: NextPage<HomeProps> = ({ contents = [], profile }) => {
  const { details, name } = profile;
  return (
    <div className="flex flex-col gap-8 mt-48">
      <Profile details={details} name={name} />
      <ContentList contents={contents} />
    </div>
  );
};

import { GetStaticProps } from "next";
import { userToProfileProps } from "../flows/home/mappers/user-to-profile-props";
import { contentToContentProps } from "../flows/home/mappers/content-to-content-props";
import { getUserByUsername } from "../flows/authentication/services/user-service/user.service";
import { getContents } from "../services/api-service/content-service/content-service/content.service";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: contents } = await getContents();
  const { result: user } = await getUserByUsername("sudo_von");

  return {
    props: {
      contents: contents.map((content) => contentToContentProps(content)),
      profile: userToProfileProps(user),
    },
  };
};

export default Home;
