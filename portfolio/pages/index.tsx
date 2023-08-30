import { NextPage } from "next";
import User, { UserProps } from "../flows/home/components/user/user";
import ContentList, { ContentListProps } from "../flows/home/components/content-list/content-list";

type HomeProps = ContentListProps & UserProps;

const Home: NextPage<HomeProps> = ({ contents = [], details, name, socialNetworks = [] }) => {
  return (
    <div className="flex flex-col gap-8 mt-48">
      <User details={details} name={name} socialNetworks={socialNetworks} />
      <ContentList contents={contents} />
    </div>
  );
};

import { GetStaticProps } from "next";
import { userToProfileProps } from "../flows/home/mappers/user-to-profile-props";
import { contentToContentProps } from "../flows/home/mappers/content-to-content-props";
import { getUserByUsername } from "../flows/authentication/services/user-service/user.service";
import { getContents } from "../services/api-service/content-service/content-service/content.service";
import { socialNetworkToSocialNetworkProps } from "../flows/home/mappers/social-network-to-social-network-props";

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => {
  const { data: contentList } = await getContents();
  const { result: user } = await getUserByUsername("sudo_von");

  const contents = contentList.map((content) => contentToContentProps(content));
  const socialNetworks = user.social_networks.map((social_network) => socialNetworkToSocialNetworkProps(social_network));
  const { details, name } = userToProfileProps(user);

  return {
    props: { contents, details, name, socialNetworks },
  };
};

export default Home;
