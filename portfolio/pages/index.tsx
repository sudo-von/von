import { NextPage } from "next";
import Content, {
  ContentProps,
} from "../flows/home/components/content/content";
import Profile, {
  ProfileProps,
} from "../flows/home/components/profile/profile";

type HomeProps = {
  contents: ContentProps[];
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
import { getContents } from "../services/api-service/content-service/content-service/content.service";
import { getAuthUserByUsername } from "../services/api-service/auth-service/user-service/auth-user.service";
import { contentResponseToContentProps } from "../services/api-service/content-service/content-service/content.service.mappers";
import ContentList from "../flows/home/components/content-list/content-list";

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { result: authUser } = await getAuthUserByUsername("sudo_von");
    const { data: contentResponses } = await getContents();

    const profile: ProfileProps = {
      name: authUser.name,
      details: authUser.details
        ? {
            quote: authUser.details.quote,
            interest: authUser.details.interest,
            position: authUser.details.position,
          }
        : null,
    };

    const contents = contentResponses.map((contentResponse) =>
      contentResponseToContentProps(contentResponse)
    );

    return {
      props: {
        profile,
        contents,
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

export default Home;
