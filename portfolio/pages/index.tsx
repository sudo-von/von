import { NextPage } from "next";
import { contents } from "../features/home/data/content-data";
import Content from "../features/home/components/content/content";
import Profile from "../features/home/components/profile/profile";

const Home: NextPage = () => {
  return (
    <>
      <div className="grid gap-8 mb-64 lg:mb-96 mt-48 text-center lg:text-start">
        <Profile
          name="Jesús Rodríguez"
          position="Software engineer"
          interest="Passionate about ethical hacking"
          quote={`At first, dreams seem impossible,\n then improbable, and eventually inevitable.`}
        />
      </div>
      {contents.map(({ media, title, subtitle, description }) => (
        <div key={title} className="grid lg:grid-cols-2 gap-8 mb-64 lg:mb-96">
          <Content
            media={media}
            title={title}
            subtitle={subtitle}
            description={description}
          />
        </div>
      ))}
    </>
  );
};

export default Home;
