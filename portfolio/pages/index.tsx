import { NextPage } from "next";
import Content from "../features/home/components/content/content";
import Profile from "../features/home/components/profile/profile";
import { contents } from "../features/home/entities/content-entity/content-data";

type HomeProps = {
  user: any;
};

const Home: NextPage<HomeProps> = ({ user }) => {
  return (
    <>
      <div className="flex flex-col gap-8 text-center lg:text-start mt-48 mb-60 md:mb-96">
        <Profile
          name={user.name}
          quote={user.quote}
          interest={user.interest}
          position={user.position}
        />
      </div>
      {contents.map((content) => (
        <div
          key={`${content.title}-${content.subtitle}`}
          className="grid lg:grid-cols-2 mb-60 lg:mb-96"
        >
          <Content
            media={content.media}
            title={content.title}
            subtitle={content.subtitle}
            description={content.description}
          />
        </div>
      ))}
    </>
  );
};

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const user = {
    name: "Jesús Rodríguez",
    position: "Software engineer",
    interest: "Passionate about ethical hacking",
    quote:
      "At first, dreams seem impossible,\n then improbable, and eventually inevitable.",
  };

  return {
    props: {
      user,
    },
  };
};

export default Home;
