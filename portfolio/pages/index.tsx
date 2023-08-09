import { NextPage } from "next";
import { GetStaticProps } from "next";
import Content, {
  ContentProps,
} from "../features/home/components/content/content";
import { user } from "../features/home/data/profile-data";
import Banner from "../features/common/components/banner/banner";
import { getStrapiContents } from "../services/content-service/content.service";
import { contentResponseToProps } from "../services/content-service/content.service.mappers";

type HomeProps = {
  contents: ContentProps[];
};

const Home: NextPage<HomeProps> = ({ contents = [] }) => {
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getStrapiContents();

  const contents = data.map((d) => contentResponseToProps(d));

  return {
    props: {
      contents,
    },
  };
};

export default Home;
