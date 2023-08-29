import { NextPage } from "next";
import Content, {
  ContentProps,
} from "../flows/home/components/content/content";
import Profile, {
  ProfileProps,
} from "../flows/home/components/profile/profile";

type HomeProps = {
  profile: ProfileProps;
  contents: ContentProps[];
};

const Home: NextPage<HomeProps> = ({ profile, contents = [] }) => {
  return (
    <div className="flex flex-col gap-8 mt-48">
      <div className="grid grid-cols-1 gap-8 mb-56 lg:mb-96 text-center lg:text-start">
        <Profile name={profile.name} details={profile.details} />
      </div>
      {contents.map(({ media, title, subtitle, description }) => (
        <div key={title} className="grid lg:grid-cols-2 gap-8 mb-56 lg:mb-96">
          <Content
            media={media}
            title={title}
            subtitle={subtitle}
            description={description}
          />
        </div>
      ))}
    </div>
  );
};

import { GetStaticProps } from "next";
import { getContents } from "../services/api-service/content-service/content-service/content.service";
import { getAuthUserByUsername } from "../services/api-service/auth-service/user-service/auth-user.service";
import { contentResponseToContentProps } from "../services/api-service/content-service/content-service/content.service.mappers";

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
