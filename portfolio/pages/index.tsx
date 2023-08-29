import { NextPage } from "next";
import { GetStaticProps } from "next";
import Content, {
  ContentProps,
} from "../flows/home/components/content/content";
import Profile, {
  ProfileProps,
} from "../flows/home/components/profile/profile";
import { getContents } from "../services/content-service/content-service/content.service";
import { getAuthUserByUsername } from "../services/auth-service/user-service/auth-user.service";
import { userResponseToProfileProps } from "../services/auth-service/user-service/user.service.mappers";
import { contentResponseToContentProps } from "../services/content-service/content-service/content.service.mappers";

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

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { result: userResponse } = await getAuthUserByUsername("sudo_von");
    const { data: contentResponses } = await getContents();

    const profile = userResponseToProfileProps(userResponse);

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
