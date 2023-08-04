import { NextPage } from "next";
import { resume } from "../features/home/data/profile-data";
import { contents } from "../features/home/data/content-data";
import Resume from "../features/home/components/resume/resume";
import Content from "../features/home/components/content/content";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col gap-8 mb-64 lg:mb-96 mt-48 text-center lg:text-start">
        <Resume
          name={resume.name}
          quote={resume.quote}
          position={resume.position}
          interest={resume.interest}
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
