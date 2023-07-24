import { NextPage, GetStaticProps } from "next";
import Profile from "../features/home/components/profile/profile";
import HomeLayout from "../features/home/layouts/home-layout/home-layout";
import AboutSection from "../features/home/components/about-section/about-section";
import ExperienceSection from "../features/home/components/experience-section/experience-section";
import TechnologySection from "../features/home/components/technology-section/technology-section";
import CybersecuritySection from "../features/home/components/cybersecurity-section/cybersecurity-section";
import axios from "axios";

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
    profile: Section;
    about: Section;
    experience: Section;
    cybersecurity: Section;
    technology: Section;
  };
};

const Home: NextPage<HomeProps> = ({ user, sections }) => {
  const { profile, about, experience, cybersecurity, technology } = sections;
  return (
    <HomeLayout>
      <Profile
        name={user.name}
        quote={profile.description}
        position={profile.title}
        interest={profile.subtitle}
      />
      <AboutSection
        title={about.title}
        subtitle={about.subtitle}
        description={about.description}
        src="https://www.youtube.com/embed/OifiVCnFKzM"
      />
      <ExperienceSection
        title={experience.title}
        subtitle={experience.subtitle}
        description={experience.description}
        companies={[
          {
            name: "Intel corporation",
            date: "Dec 2021 - Mar 2023",
            position: "Full stack engineer",
            src: "https://logodownload.org/wp-content/uploads/2014/04/intel-logo-1-1.png",
          },
          {
            name: "Tredicom",
            date: "Nov 2020 - Dec 2021",
            position: "Full stack developer",
            src: "https://scontent.fntr5-1.fna.fbcdn.net/v/t39.30808-6/300443824_168920352354407_1778796302346087197_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AFeFYwEAO1YAX-sqqaC&_nc_ht=scontent.fntr5-1.fna&oh=00_AfADKTqwqkpPAH7GpLqZhdftMMgRtZxZ6iFvdUp3NXn3nw&oe=64C1BBEB",
          },
          {
            name: "Evotek",
            date: "Jun 2019 - Nov 2020",
            position: "Full stack developer",
            src: "https://evotek.vn/wp-content/uploads/2020/05/LinkedIn-Personal-Profile-Image-400x400-1.png",
          },
        ]}
      />
      <CybersecuritySection
        title={cybersecurity.title}
        subtitle={cybersecurity.subtitle}
        description={cybersecurity.description}
        src="https://www.youtube.com/embed/81H41vp96ag"
      />
      <TechnologySection
        title={technology.title}
        subtitle={technology.subtitle}
        description={technology.description}
        src="https://www.youtube.com/embed/81H41vp96ag"
      />
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

  const { data: profileSection } = await axios.get<Section>(
    "http://localhost:3002/api/v1/content/username/sudo_von/type/profile"
  );

  const { data: aboutSection } = await axios.get<Section>(
    "http://localhost:3002/api/v1/content/username/sudo_von/type/about-me"
  );

  const { data: experienceSection } = await axios.get<Section>(
    "http://localhost:3002/api/v1/content/username/sudo_von/type/experience"
  );

  const { data: cybersecuritySection } = await axios.get<Section>(
    "http://localhost:3002/api/v1/content/username/sudo_von/type/cybersecurity"
  );

  const { data: technologySection } = await axios.get<Section>(
    "http://localhost:3002/api/v1/content/username/sudo_von/type/technologies"
  );

  return {
    props: {
      user,
      sections: {
        profile: profileSection.result,
        about: aboutSection.result,
        experience: experienceSection.result,
        cybersecurity: cybersecuritySection.result,
        technology: technologySection.result,
      },
    },
  };
};

export default Home;
