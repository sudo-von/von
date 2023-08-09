import { NextPage } from "next";
import { user } from "../features/home/data/profile-data";
import { contents } from "../features/home/data/content-data";
import Banner from "../features/common/components/banner/banner";
import Content, {
  ContentProps,
} from "../features/home/components/content/content";

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

import { GetStaticProps } from "next";
import axios from "axios";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const url = `http://localhost:1337/api/contents?populate[0]=media&populate[1]=media.timelines.src,media.vectors.src,media.video`;

  const { data } = await axios.get(url);

  console.log(data);

  const content: ContentProps[] = data.data.map((d: any) => ({
    title: "a",
  }));

  return {
    props: {},
  };
};

export default Home;
