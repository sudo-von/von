import { NextPage } from "next";
import Profile from "../features/Ask/components/Profile/Profile";

const user = {
  id: "649387d48ab57bb1f0207eb7",
  name: "Jesús Rodríguez",
  email: "sudo.von.contact@gmail.com",
  username: "sudo_von",
  profile_picture:
    "https://i.pinimg.com/originals/58/df/ae/58dfae343c0b0078546f3efda94e8cda.jpg",
  about: {
    position: "Software developer",
    interest: "Passionate about ethical hacking",
    quote: `At first, dreams seem impossible, \n then improbable, and eventually inevitable`,
  },
  metrics: {
    total_views: 55,
    total_answers: 15,
    total_questions: 33,
  },
};

const Home: NextPage = () => {
  return (
    <div className="mx-96 my-72">
      <Profile
        name={user.name}
        metrics={user.metrics}
        interest={user.about.interest}
        position={user.about.position}
        profile_picture={user.profile_picture}
      />
    </div>
  );
};

export default Home;
