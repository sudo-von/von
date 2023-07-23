import { NextPage, GetStaticProps } from "next";
import HomeVideo from "../features/home/components/home-video/home-video";
import HomeProfile from "../features/home/components/home-profile/home-profile";
import HomeSection from "../features/home/components/home-section/home-section";
import axios from "axios";
import HomeLayout from "../features/home/layouts/home-layout/home-layout";
import HomeSectionLayout from "../features/home/layouts/home-section-layout/home-section-layout";

type User = {
  name: string;
  quote: string;
  interest: string;
  position: string;
};

type Section = {
  title: string;
  subtitle: string;
  description: string;
};

type HomeProps = {
  user: User;
  sections: {
    about: Section;
    experience: Section;
    cybersecurity: Section;
    technology: Section;
  };
};

const Home: NextPage<HomeProps> = ({ user, sections }) => {
  const { about, experience, cybersecurity, technology } = sections;
  return (
    <HomeLayout>
      <HomeProfile
        name={user.name}
        quote={user.quote}
        position={user.position}
        interest={user.interest}
      />
      <HomeSectionLayout>
        <HomeSection
          title={about.title}
          subtitle={about.subtitle}
          description={about.description}
        />
        <HomeVideo
          title="About me"
          src="https://www.youtube.com/embed/81H41vp96ag"
        />
      </HomeSectionLayout>
      <HomeSectionLayout>
        <HomeSection
          title={experience.title}
          subtitle={experience.subtitle}
          description={experience.description}
        />
        <HomeVideo
          title="Experience"
          src="https://www.youtube.com/embed/81H41vp96ag"
        />
      </HomeSectionLayout>
      <HomeSectionLayout>
        <HomeSection
          title={cybersecurity.title}
          subtitle={cybersecurity.subtitle}
          description={cybersecurity.description}
        />
        <HomeVideo
          title="Cybersecurity"
          src="https://www.youtube.com/embed/81H41vp96ag"
        />
      </HomeSectionLayout>
      <HomeSectionLayout>
        <HomeSection
          title={technology.title}
          subtitle={technology.subtitle}
          description={technology.description}
        />
        <HomeVideo
          title="Technologies"
          src="https://www.youtube.com/embed/81H41vp96ag"
        />
      </HomeSectionLayout>
    </HomeLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const user = {
    name: "Jesús Rodríguez",
    position: "Software engineer",
    interest: "Passionate about ethical hacking",
    quote: `At first, dreams seem impossible,\nthen improbable, and eventually inevitable.`,
  };

  const aboutSection = {
    title: "Introduction",
    subtitle:
      "I was fortunate.\nI discovered what I wanted to do early in life.",
    description:
      "Since I was a child, I’ve had a dream in mind,\nthe dream of being able to live in the country I love.\n\nBut you can't live on dreams alone;\nyou have to work hard for them.\n\nThat's why I decided to embrace education\nas the driving force to achieve my dreams.",
  };

  const experienceSection = {
    title: "Experience",
    subtitle:
      "Code is just a tool.\nTrue achievement lies in its impact on lives.",
    description:
      "In my journey as a developer, I've realized that code\nis not merely lines of instructions, but a means to\ncreate something meaningful.\n\nBy working closely with diverse companies and\nspecializing in full-stack development, with a primary\nfocus on front-end expertise.\n\nMy objective is to utilize the power of code to bring\nabout a positive change in people's lives.",
  };

  const cybersecuritySection = {
    title: "Cybersecurity",
    subtitle: "Developer by day.\nEthical hacker by night.",
    description:
      "I’ve participated in multiple national-level\ncompetitions, achieving top positions by breaking\nthrough controlled systems.\n\nAs a developer, I utilize my security knowledge to\nuncover overlooked vulnerabilities.\n\nOne of my biggest achievements was discovering\nand successfully fixing multiple critical vulnerabilities\nat Intel Corporation.",
  };

  const technologySection = {
    title: "Technologies",
    subtitle: "Mastering the JavaScript tech stack.",
    description:
      "I’m a passionate JavaScript enthusiast,\nwith aspirations of becoming an expert one day.\n\nMy tech stack covers a wide range of resources that\nallow me to develop efficient and high-quality\napplications and websites.\n\nFrom architecture to implementation,\nI'm ready to take on challenges and make\nthe most of modern tools to deliver outstanding results.",
  };

  return {
    props: {
      user,
      sections: {
        about: aboutSection,
        experience: experienceSection,
        cybersecurity: cybersecuritySection,
        technology: technologySection,
      },
    },
  };
};

export default Home;
