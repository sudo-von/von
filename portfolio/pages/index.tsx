import { NextPage } from "next";
import { GetStaticProps } from "next";
import Content, {
  ContentProps,
} from "../features/home/components/content/content";
import { getUserByUsername } from "../services/authentication-service/user-service/user.service";
import { User } from "../features/home/entities/user-entity/user-entities";
import Profile from "../features/home/components/profile/profile";

type ProfileProps = {
  name: string;
  quote: string;
  interest: string;
  position: string;
};

type HomeProps = {
  user: User;
  contents: ContentProps[];
};

const Home: NextPage<HomeProps> = ({ user, contents = [] }) => {
  return (
    <div className="flex flex-col mt-48">
      <div className="grid gap-8 text-center lg:text-start">
        {user.details && (
          <Profile
            name={user.name}
            quote={user.details.quote}
            position={user.details.position}
            interest={user.details.interest}
          />
        )}
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
  const { result: user } = await getUserByUsername("sudo_von");
  try {
    return {
      props: {
        user,
        contents: [],
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
