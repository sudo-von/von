import { NextPage } from "next";
import AskLayout from "../features/ask/layouts/ask-layout/ask-layout";
import Typography from "../components/typography/typography";
import HomeProfile from "../features/home/components/home-profile/home-profile";
import HomeSection from "../features/home/components/home-section/home-section";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-start mt-24 sm:mt-28 md:mt-32">
      <div className="flex flex-col gap-8 w-full">
        <HomeProfile
          name="Jesús Rodríguez"
          position="Software engineer"
          interest="Passionate about ethical hacking"
          quote={`At first, dreams seem impossible,${"\n"}then improbable, and eventually inevitable.`}
        />
      </div>
      <div className="mt-60 flex flex-row gap-5 w-full sm:w-full md:w-4/6 items-center justify-between">
        <HomeSection
          title="Introduction"
          subtitle={`I was fortunate.
I discovered what I wanted to do early in life.`}
          description={`Since I was a child, I've had a dream in mind,
the dream of being able to live in the country I love.
          
But you can't live on dreams alone;
you have to work hard for them.

That's why I decided to embrace education
as the driving force to achieve my dreams.`}
        />
        <div className="flex flex-col">
          <iframe
            className="rounded"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/81H41vp96ag"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
