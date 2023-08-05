import { NextPage } from "next";
import { user } from "../features/home/data/profile-data";
import { contents } from "../features/home/data/content-data";
import Banner from "../features/common/components/banner/banner";
import Content from "../features/home/components/content/content";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-8 mt-48">
      <div className="text-center lg:text-start">
        <Banner>{user.name}</Banner>
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

export default Home;
