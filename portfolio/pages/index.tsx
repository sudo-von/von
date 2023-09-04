import { NextPage } from "next";
import { ContentProps } from "@home/components/content/content";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import ContentList from "@home/components/content-list/content-list";
import Profile, { ProfileProps } from "@home/components/profile/profile";

type HomeProps = {
  contents: ContentProps[];
  profile: ProfileProps;
};

const Home: NextPage<HomeProps> = ({ contents = [], profile }) => {
  const { details, name, socialNetworks } = profile;
  return (
    <MetaLayout
      author={name}
      description="Meet a dedicated software developer pursuing their dream of moving to Canada."
      keywords="JavaScript, TypeScript, React, Testing, Node, Express"
      title={name}
    >
      <div className="flex flex-col gap-8 mt-48">
        <Profile
          details={details}
          name={name}
          socialNetworks={socialNetworks}
        />
        <ContentList contents={contents} />
      </div>
    </MetaLayout>
  );
};

import { GetStaticProps } from "next";
import { toContentProps } from "@home/components/content/content.mappers";
import { toProfileProps } from "@home/components/profile/profile.mappers";
import { getContentList } from "@home/services/content-service/content.service";
import { getUserByUsername } from "@authentication/services/user-service/user.service";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data: contentList } = await getContentList();
  const { result: user } = await getUserByUsername("sudo_von");

  return {
    props: {
      contents: contentList.map((c) => toContentProps(c)),
      profile: toProfileProps(user),
    },
  };
};

export default Home;
