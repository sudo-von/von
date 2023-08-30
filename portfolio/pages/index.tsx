import { NextPage } from "next";
import User, { UserProps } from "../flows/home/components/user/user";
import { ContentProps } from "../flows/home/components/content/content";
import ContentList, { ContentListProps } from "../flows/home/components/content-list/content-list";
import { SocialNetworkProps } from "../flows/home/components/user/components/social-network/social-network";

type HomeProps = ContentListProps & UserProps;

const Home: NextPage<HomeProps> = ({ contents = [], details, name, socialNetworks = [] }) => {
  return (
    <div className="flex flex-col gap-8 mt-48">
      <User details={details} name={name} socialNetworks={socialNetworks} />
      <ContentList contents={contents} />
    </div>
  );
};

import { GetStaticProps } from "next";
import { getUserByUsername } from "../flows/authentication/services/user-service/user.service";
import { getContents } from "../services/api-service/content-service/content-service/content.service";

export const getStaticProps: GetStaticProps<HomeProps> = async (_ctx) => {
  const { result: user } = await getUserByUsername("sudo_von");
  const { data: contentList } = await getContents();

  const contents = contentList.map(({ attributes }) => {
    const { description, media, subtitle, title } = attributes;
    const { timelines, vectors, video } = media.data.attributes;

    const timelinesMedia = timelines.data.map((t) => ({
      company: t.attributes.company,
      endDate: t.attributes.end_date,
      position: t.attributes.position,
      startDate: t.attributes.start_date,
      description: t.attributes.description,
      src: t.attributes.src.data.attributes.url,
    }));

    const vectorsMedia = vectors.data.map((v) => ({
      alt: v.attributes.alt,
      src: v.attributes.src.data.attributes.url,
    }));

    const videoMedia = video.data && {
      src: video.data.attributes.url,
      title: video.data.attributes.title,
    };

    const result: ContentProps = {
      title,
      subtitle,
      description,
      media: {
        video: videoMedia,
        vectors: vectorsMedia,
        timelines: timelinesMedia,
      },
    };

    return result;
  });

  const details = user.details ? {
    interest: user.details.interest,
    position: user.details.position,
    quote: user.details.quote,
  } : null;

  const { name } = user;

  const socialNetworks: SocialNetworkProps[] = user.social_networks.map((sn) => ({
    alt: sn.name,
    href: sn.url,
    src: sn.src,
  }));

  return {
    props: {
      contents,
      details,
      name,
      socialNetworks,
    },
  };
};

export default Home;
