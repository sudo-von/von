import { NextPage } from "next";
import { profile } from "../features/home/data/profile-data";
import { contents } from "../features/home/data/content-data";
import Content from "../features/home/components/content/content";
import Profile from "../features/home/components/profile/profile";

const Home: NextPage = () => {
  return (
    <>
      <div className="grid gap-8 mb-64 lg:mb-96 mt-48 text-center lg:text-start">
        <Profile
          name={profile.name}
          quote={profile.quote}
          position={profile.position}
          interest={profile.interest}
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
